import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, from, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private rootUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get(this.rootUrl + 'getCustomers').pipe(
      catchError(this.handleError),
      map((response: any) => {
        return response;
      })
    )
  }

  getTerritories() {
    return this.httpClient.get(this.rootUrl + 'getTerritories').pipe(
      catchError(this.handleError),
      map((response: any) => {
        return response;
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
