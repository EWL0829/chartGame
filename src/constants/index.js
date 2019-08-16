export const constant = {
    initPrice: 8000,
    up: {
        initMarketPrice: 8000, // 初始市场合约价格

        littlePrice: 9000, // 小幅看涨合约价格
        firstChangeLittlePrice: 8700, // 首次波动小幅看涨合约价格
        secondChangeLittlePrice: 7500, // 二次波动小幅看涨合约价格
        littleCurPrice: 0.0100, // 小幅看涨当前BTC价格
        firstChangeLittleCurPrice: 0.0600, // 首次波动小幅看涨BTC价格
        secondChangeLittleCurPrice: 0.0080, // 二次波动小幅看涨BTC价格

        largePrice: 15000, // 大幅看涨合约价格
        firstChangeLargePrice: 13000, // 首次波动大幅看涨合约价格
        secondChangeLargePrice: 8000, // 二次波动大幅看涨合约价格
        largeCurPrice: 0.0005, // 大幅看涨当前BTC价格
        firstChangeLargeCurPrice: 0.0060, // 首次波动大幅看涨BTC价格
        secondChangeLargeCurPrice: 0.0005, // 二次波动大幅看涨BTC价格

        priceTrend: '上涨',
        simplePriceTrend: '涨',
        tradeTrend: '买入',
        expectTrend: '看涨',
        marketAction: '回调',
        marketTrend: '回落',
    },
    down: {
        initMarketPrice: 8000, // 初始市场合约价格

        littlePrice: 7000, // 小幅看跌合约价格
        firstChangeLittlePrice: 7200, // 首次波动小幅看跌合约价格
        secondChangeLittlePrice: 8500, // 二次波动小幅看涨合约价格
        littleCurPrice: 0.0100, // 小幅看跌当前BTC价格
        firstChangeLittleCurPrice: 0.0600, // 首次波动小幅看跌BTC价格
        secondChangeLittleCurPrice: 0.0080, // 二次波动小幅看涨BTC价格

        largePrice: 3000, // 大幅看跌合约价格
        firstChangeLargePrice: 5000, // 首次波动大幅看跌合约价格
        secondChangeLargePrice: 7000, // 二次波动大幅看涨合约价格
        largeCurPrice: 0.0005, // 大幅看跌当前BTC价格
        firstChangeLargeCurPrice: 0.0060, // 首次波动大幅看跌BTC价格
        secondChangeLargeCurPrice: 0.0005, // 二次波动大幅看涨BTC价格

        priceTrend: '下跌',
        simplePriceTrend: '跌',
        tradeTrend: '卖出',
        expectTrend: '看跌',
        marketAction: '反弹',
        marketTrend: '上涨',
    },
};
