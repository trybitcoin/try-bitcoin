export class TutorialSession {

    private _sessionId: string;
    private _reservedAmount: number;

    constructor(sessionId: string, reservedAmount: number) {
        this._sessionId = sessionId;
        this._reservedAmount = reservedAmount;
    }

    get sessionId(): string {
        return this._sessionId;
    }

    set sessionId(value: string) {
        this._sessionId = value;
    }

    get reservedAmount(): number {
        return this._reservedAmount;
    }

    set reservedAmount(value: number) {
        this._reservedAmount = value;
    }
}
