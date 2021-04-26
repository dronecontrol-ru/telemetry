export class MicroEvents  {
    constructor() {
        this._microevents = new Map();
    }

    on(event, callback) {
        if (!this._microevents.has(event)) {
            this._microevents.set(event, new Set());
        }
        this._microevents.get(event).add(callback);
    }

    emit(event, ...args) {
        const events = this._microevents.get(event);
        if (!events) {
            return;
        }
        events.forEach((callback) => {
            callback.apply({}, args);
        });
    }

    removeAllListeners(event) {
        this._microevents.delete(event);
    }

    removeEventListener(event, callback) {
        const events = this._microevents.get(event);
        if (!events) {
            return;
        }
        events.delete(callback);
        if (events.size === 0) {
            this.removeAllListeners(event);
        }
    }    
}