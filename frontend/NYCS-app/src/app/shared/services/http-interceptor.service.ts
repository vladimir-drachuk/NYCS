import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(req.clone({
      url: `${environment.SERVER_URL}/${req.url}`
    }));
  }
}
