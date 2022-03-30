import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppMarvelInterceptor } from './app.interceptor';

@NgModule({
 providers: [
    AppMarvelInterceptor,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AppMarvelInterceptor,
        multi: true,
    },
 ],
})
export class AppInterceptorModule {}