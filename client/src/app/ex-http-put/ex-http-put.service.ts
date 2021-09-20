import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { RevenueDetail } from './ex-http-put.model';

@Injectable()
export class ExHttpPutService {

    constructor(private httpClient: HttpClient) { 

    }

    exHttpPut(revenueDetail: RevenueDetail): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        const databaseId: string = '56c92111-220a-43fe-b4b2-69037f5963c3';
        const userId: string = 'eb4d0370-554c-45c9-9458-92861a15b6a9';

        return this.httpClient.put('https://localhost:5001/Sample/'+ databaseId + '/revenue/' + userId, revenueDetail, { headers: headers })
    }
}