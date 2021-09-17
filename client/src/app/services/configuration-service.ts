import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AppSettings } from './appsetting';

@Injectable()
export class ConfigurationService {

    constructor(private httpClient: HttpClient) { 

    }

    getUserId(): Observable<string> {
        return of("3a996795-2b88-435a-be82-fd09a00aac4c");
    }

    getSearchAutoComplete(userId: string, variableName: string) : Observable<any> {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        let params = new HttpParams()
            .set("userId", userId)
            .set("variableName", variableName);

        return this.httpClient.get('https://localhost:5001/Configuration/getSearchAutoComplete/' + userId + '/' + variableName, { headers: headers, params: params })
    }

    setSearchAutoComplete(appSettings: AppSettings) : Observable<any> {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');


        return this.httpClient.post('https://localhost:5001/Configuration/setSearchAutoComplete', appSettings, { headers: headers })
    }
}