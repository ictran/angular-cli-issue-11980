import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReproService {

  constructor(private http: HttpClient) { }

  postFileWithProgress(file: File) : Observable<HttpEvent<Object>> {
    const req = new HttpRequest('POST', 'http://httpbin.org/post', file, { reportProgress: true });
    return this.http.request<Object>(req);
  }
}
