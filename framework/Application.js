import http from 'http';
import { EventEmitter } from "events";


export class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach((path) => {
            const endpoint = router.endpoints[path];

            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, method), (req, resp) => {
                    handler(req, resp);
                })
            })
        })
    }

    listen(port, host, callback) {
        this.server.listen(port, host, callback)
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emmited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);

            if(!emmited) {
                res.end('wrong route')
            }
        })
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }
}