import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DbService } from './services/db.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ColoredDirective } from './directives/colored.directive';

@NgModule({
  declarations: [
    ColoredDirective,
  ],
  exports: [
    ColoredDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DbService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class SharedModule {
  constructor(private db: DbService) { }
}
