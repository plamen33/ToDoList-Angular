import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {ActionListService} from "./action-list/action-list.service";
import {TodoItemService} from "./todoitems/todoitem.service";
import { AuthInterceptorService } from './auth/auth-interceptor.service';


@NgModule({
  providers: [
    ActionListService, TodoItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
