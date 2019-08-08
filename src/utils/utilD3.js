import * as d3 from 'd3';

function configTransition(t, time) {
    return d3.transition().duration(t).delay(time || 0).ease(d3.easeLinear);
}

export default {
    createPoint ({ container, pointCls, axisData, duration, delayTime, xScale, yScale  }) {
        let svg = container
            .append('g')
            .attr('transform', 'translate(75, 0)')
            .attr('class', pointCls)
            .data([axisData]);

        let circleT = configTransition(duration || 1500, delayTime);

        svg.append('circle')
            .attr('class', 'outer-circle')
            .attr('cx', (d) => {
                return xScale(d.x);
            })
            .attr('cy', (d) => {
                return yScale(d.y);
            })
            .transition(circleT)
            .attr('r', '10')
            .style('stroke-width', '1')
            .style('stroke', 'rgba(255, 255, 255, .5)')
            .style('fill', 'transparent');

        svg.append('circle')
            .attr('class', 'inner-circle')
            .attr('cx', (d) => {
                return xScale(d.x);
            })
            .attr('cy', (d) => {
                return yScale(d.y);
            })
            .transition(circleT)
            .attr('r', '7')
            .style('stroke-width', '2')
            .style('stroke', 'rgba(255, 255, 255, .5)')
            .style('fill', 'transparent');

        svg.append('circle')
            .attr('class', 'inner-point')
            .attr('cx', (d) => {
                return xScale(d.x);
            })
            .attr('cy', (d) => {
                return yScale(d.y);
            })
            .transition(circleT)
            .attr('r', '5')
            .style('fill', '#fff');
    },
    createTransition(t, time) {
        return d3.transition().duration(t).delay(time || 0).ease(d3.easeLinear);
    },
    createCurveFadeIn(path, duration) {
        let totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition(this.createTransition(duration || 2000))
            .attr("stroke-dashoffset", 0);
    },
    clearSvgWrap(cls, isAll) {
        if (isAll) {
            d3.selectAll(cls).remove();
        } else {
            d3.select(cls).remove();
        }
    }
}
