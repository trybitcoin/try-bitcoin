export class PaymentRequest {
    private _id: string;
    private _invoice: string;

    constructor(id: string, invoice: string) {
        this._id = id;
        this._invoice = invoice;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get invoice(): string {
        return this._invoice;
    }

    set invoice(value: string) {
        this._invoice = value;
    }
}
