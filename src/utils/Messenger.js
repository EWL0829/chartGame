/**
 * 消息通信
 * Created by LiuHe on 2017/5/23.
 */

class Messenger {

    constructor() {
        this.handlers = {};
    }

    onMessage(channel, handler) {
        if (!this.handlers[channel]) {
            this.handlers[channel] = [];
        }

        this.handlers[channel].push(handler);

        return () => {
            this.stopMessage(channel, handler);
        }
    }

    postMessage(channel, message) {
        let handlers = this.handlers[channel];

        if (!handlers) return;

        handlers.forEach(handler => handler(message));
    }

    stopMessage(channel, handler) {
        let handlers = this.handlers[channel];

        if (handlers.length < 1) return;

        let index = handlers.indexOf(handler);
        index >= 0 && handlers.splice(index, 1);
    }
}

export const message = new Messenger();
