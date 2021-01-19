import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( request.headers.get('skip')) {
      request = request.clone({
        headers: request.headers.delete('skip')
      });
      return next.handle(request);
    } else if (request.responseType === 'text') {
      return next.handle(request);
    }
    if (!request.url.match(environment.host)) {
      request = request.clone({
        url: `${environment.host}/${request.url}`
      });
    }

    return next.handle(request);
  }
}
