
export class Application {

    constructor() {
        this.actionClose
    }

    _bindActions(close) {
        this.actionClose = close
    }

    close() {
        this.actionClose()
    }

}