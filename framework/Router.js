import { EventEmitter } from "events";

const emitter = new EventEmitter();

export class Router {
    constructor() {
        this.endpoints = {};
    }

    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error('method already exists')
        }

        endpoint[method] = handler;

    }

    get(path, handler) {
        return this.request('GET', path, handler);
    }

    post(path, handler) {
        return this.request('POST', path, handler);
    }

    put(path, handler) {
        return this.request('PUT', path, handler);
    }

    patch(path, handler) {
        return this.request('PATCH', path, handler);
    }

    delete(path, handler) {
        return this.request('DELETE', path, handler);
    }
}


