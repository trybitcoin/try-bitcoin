import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NodeInfo} from "./node-info";

@Injectable({
    providedIn: 'root'
})
export class NodeInfoService {

    constructor(private http: HttpClient) {
    }

    public getNodeInfo(): Observable<NodeInfo> {
        return this.http
            .get('api/node/info')
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
