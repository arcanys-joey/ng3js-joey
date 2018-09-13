import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// you need to create your own file and export your test token
// since this is a public repo, we don't want to expose any token
import { auth_token } from './auth_token';

@Injectable()
export class DesignDataService {

  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable().pipe(filter((data) => !!data));

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://fabapi.aedglobal.com.au/design-project-file/3', {
      responseType: 'json',
      headers: new HttpHeaders({
        // tslint:disable-next-line
        'Authorization': `Bearer ${ auth_token }`
      })
    })
    .pipe(tap((result) => console.log('result', result)))
    .subscribe((result) => {
      this.dataSubject.next(result);
    });
  }

}
