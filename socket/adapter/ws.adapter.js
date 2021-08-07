"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAdapter = void 0;
const WebSocket = require("ws");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WsAdapter {
    constructor(app) {
        this.app = app;
    }
    create(port, options = {}) {
        return new WebSocket.Server(Object.assign({ port }, options));
    }
    bindClientConnect(server, callback) {
        server.on('connection', callback);
    }
    bindMessageHandlers(client, handlers, process) {
        rxjs_1.fromEvent(client, 'message')
            .pipe(operators_1.mergeMap(data => this.bindMessageHandler(data, handlers, process)), operators_1.filter(result => result))
            .subscribe(response => client.send(JSON.stringify(response)));
    }
    bindMessageHandler(buffer, handlers, process) {
        const message = JSON.parse(buffer.data);
        const messageHandler = handlers.find(handler => handler.message === message.event);
        if (!messageHandler) {
            return rxjs_1.EMPTY;
        }
        return process(messageHandler.callback(message.data));
    }
    close(server) {
        server.close();
    }
}
exports.WsAdapter = WsAdapter;
//# sourceMappingURL=ws.adapter.js.map