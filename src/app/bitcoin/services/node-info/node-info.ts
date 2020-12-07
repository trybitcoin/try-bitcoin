export class NodeInfo {
    private _alias: string;
    private _address: string;
    private _pubKey: string;

    private _numberOfPayments: number;
    private _numberOfSatsReceived: number;

    private _feesDailyInSats: number;
    private _feesWeeklyInSats: number;
    private _feesMonthlyInSats: number;

    constructor(alias: string, address: string, pubKey: string, numberOfPayments: number, numberOfSatsReceived: number, feesDailyInSats: number, feesWeeklyInSats: number, feesMonthlyInSats: number) {
        this._alias = alias;
        this._address = address;
        this._pubKey = pubKey;
        this._numberOfPayments = numberOfPayments;
        this._numberOfSatsReceived = numberOfSatsReceived;
        this._feesDailyInSats = feesDailyInSats;
        this._feesWeeklyInSats = feesWeeklyInSats;
        this._feesMonthlyInSats = feesMonthlyInSats;
    }

    get alias(): string {
        return this._alias;
    }

    set alias(value: string) {
        this._alias = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get pubKey(): string {
        return this._pubKey;
    }

    set pubKey(value: string) {
        this._pubKey = value;
    }

    get numberOfPayments(): number {
        return this._numberOfPayments;
    }

    set numberOfPayments(value: number) {
        this._numberOfPayments = value;
    }

    get numberOfSatsReceived(): number {
        return this._numberOfSatsReceived;
    }

    set numberOfSatsReceived(value: number) {
        this._numberOfSatsReceived = value;
    }

    get feesDailyInSats(): number {
        return this._feesDailyInSats;
    }

    set feesDailyInSats(value: number) {
        this._feesDailyInSats = value;
    }

    get feesWeeklyInSats(): number {
        return this._feesWeeklyInSats;
    }

    set feesWeeklyInSats(value: number) {
        this._feesWeeklyInSats = value;
    }

    get feesMonthlyInSats(): number {
        return this._feesMonthlyInSats;
    }

    set feesMonthlyInSats(value: number) {
        this._feesMonthlyInSats = value;
    }
}
