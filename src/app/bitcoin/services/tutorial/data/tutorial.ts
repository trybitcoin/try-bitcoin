export class Tutorial {
    private _price: string;
    private _withdrawalsToday: number;
    private _maxWithdrawalsToday: number;

    constructor(price: string, withdrawalsToday: number, maxWithdrawalsToday: number) {
        this._price = price;
        this._withdrawalsToday = withdrawalsToday;
        this._maxWithdrawalsToday = maxWithdrawalsToday;
    }
    
    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get withdrawalsToday(): number {
        return this._withdrawalsToday;
    }

    set withdrawalsToday(value: number) {
        this._withdrawalsToday = value;
    }

    get maxWithdrawalsToday(): number {
        return this._maxWithdrawalsToday;
    }

    set maxWithdrawalsToday(value: number) {
        this._maxWithdrawalsToday = value;
    }
}
