import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import {DropdownDirective} from "./shared/dropdown.directive";
// import {ActionListService} from "./action-list/action-list.service";
import {AppRoutingModule} from "./app-routing.module";

// import { TodoItemService} from './todoitems/todoitem.service';
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
// the import just tells the location it has nothing to do with Angular
// import {TodoItemsModule} from "./todoitems/todoitems.module";
// import {ActionListModule} from "./action-list/action-list.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
// import {AuthModule} from "./auth/auth.module";
import {LoggingService} from "./logging.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // , AuthComponent
  ],
  imports: [   // this array in NgModel is there for Angular to add features of other NgModules to this NgModule
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   // TodoItemsModule,  // we do not need the import as I use lazy loading - only load when called
   // ActionListModule, // we do not need the import as I use lazy loading - only load when called
   // AuthModule, // we do not need the import as I use lazy loading - only load when called
    SharedModule,
    CoreModule
  ],
  // providers: [
  //   ActionListService, TodoItemService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true
  //   }
  // ],
  bootstrap: [AppComponent],
  providers: [LoggingService]  // has same effect as using //@Injectable({ providedIn: 'root' })  in logging.service.ts
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AppModule { }
//  ActionListService, TodoItemService,
//  {
//  provide: HTTP_INTERCEPTORS,
//  useClass: AuthInterceptorService,
//  multi: true
// }
