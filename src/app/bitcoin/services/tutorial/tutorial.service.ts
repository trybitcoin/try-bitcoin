import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Statistics} from "./data/statistics";
import {TutorialSession} from "./data/tutorial-session";
import {Tutorial} from "./data/tutorial";

@Injectable({
    providedIn: 'root'
})
export class TutorialService {

    constructor(private http: HttpClient) {
    }

    public getStatistics(): Observable<Statistics> {
        return this.http
            .get('api/tutorial/stats')
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    public startTutorial(): Observable<Tutorial> {
        return this.http
            .get('api/tutorial/start').pipe(
                map(this.extractData),
                catchError(this.handleError)
            ); //TODO change to post
    }

    public solveCaptcha(captcha: string): Observable<TutorialSession> {
        return this.http
            .get('api/tutorial/captcha/' + captcha).pipe(
                map(this.extractData),
                catchError(this.handleError)
            ); //TODO change to post
    }

    private extractData(res: any) {
        return res || {};
    }

    private handleError(error: HttpErrorResponse | any): Observable<never> {
        console.log(error);
        return throwError(error);
    }
}
