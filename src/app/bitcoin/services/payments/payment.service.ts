import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {TxnStatus} from "./data/txn-status";
import {PaymentRequest} from "../../../payment-request";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    constructor(private http: HttpClient) {
    }

    public createPaymentRequest(): Observable<PaymentRequest> {
        return this.http.get<PaymentRequest>(
            '/api/payment/paymentRequest'
        );
    }

    public getPaymentStatus(paymentId: string): Observable<TxnStatus> {
        return this.http
            .get('api/payment/status/' + paymentId)
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    public getWithdrawStatus(withdrawId: string): Observable<TxnStatus> {
        return this.http
            .get('api/payment/withdraw-status/' + withdrawId)
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    private extractData(res: any) {
        return res || {};
    }

    private handleError(error: HttpErrorResponse | any): Observable<never> {
        console.log(error);
        return throwError(error);
    }

}
