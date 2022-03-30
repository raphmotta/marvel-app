import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams} from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable()
export class AppMarvelInterceptor implements HttpInterceptor {
    private appkey="89706e3a77da641c3e8693b49f4badc5";
    private secretkey="07b61c60c299e523a518fba517c519889965d9ed";
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const md5 = new Md5();
      const data = Date.now().toString();
      md5.appendStr(data).appendStr(this.secretkey).appendStr(this.appkey);

        const newReq = req.clone({
          params: (req.params ? req.params : new HttpParams())
                     .set('ts',data) /*.... add new params here .....*/ 
                     .set ('apikey',this.appkey)
                     .set ('hash', md5.end().toString() )
        });
    
        return next.handle(newReq);
      }
}