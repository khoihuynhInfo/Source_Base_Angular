import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IHttpClientOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
}
