export class Statistics {
    private _introStepVisited: number;
    private _walletStepVisited: number;
    private _installStepVisited: number;
    private _receiveStepVisited: number;
    private _sendStepVisited: number;

    get introStepVisited(): number {
        return this._introStepVisited;
    }

    set introStepVisited(value: number) {
        this._introStepVisited = value;
    }

    get walletStepVisited(): number {
        return this._walletStepVisited;
    }

    set walletStepVisited(value: number) {
        this._walletStepVisited = value;
    }

    get installStepVisited(): number {
        return this._installStepVisited;
    }

    set installStepVisited(value: number) {
        this._installStepVisited = value;
    }

    get receiveStepVisited(): number {
        return this._receiveStepVisited;
    }

    set receiveStepVisited(value: number) {
        this._receiveStepVisited = value;
    }

    get sendStepVisited(): number {
        return this._sendStepVisited;
    }

    set sendStepVisited(value: number) {
        this._sendStepVisited = value;
    }
}
