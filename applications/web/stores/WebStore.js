// TODO: WebStore handle sync with server?

export default class WebStore {
    constructor() {
        this.version = 0;
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
        this.version++;
    }
}