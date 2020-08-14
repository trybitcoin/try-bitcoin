export class TxnStatus {
    private _id: string;
    private _ok: boolean;

    constructor(id: string, ok: boolean) {
        this._id = id;
        this._ok = ok;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get ok(): boolean {
        return this._ok;
    }

    set ok(value: boolean) {
        this._ok = value;
    }
}
