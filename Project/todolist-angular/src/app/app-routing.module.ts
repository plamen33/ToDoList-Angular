import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ActionListComponent } from './action-list/action-list.component';
// import { TodoItemsComponent } from './todoitems/todoitems.component';
// import { TodoItemStartComponent } from './todoitems/todoitem-start/todoitem-start.component';
// import { ItemDetailComponent } from "./todoitems/item-detail/item-detail.component";
// import { TodoItemEditComponent } from './todoitems/todoitem-edit/todoitem-edit.component';
// import {TodoitemsResolverService} from "./todoitems/todoitems-resolver.service";
// import { AuthGuard } from './auth/auth.guard';
// import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/todoitems', pathMatch: 'full' },
  {  path: 'todoitems', loadChildren: './todoitems/todoitems.module#TodoItemsModule' }, //was transferred to todoitems-routing.module.ts  // loadChildren - loads module things only when user visits the path (todoitems)
  { path: 'action-list', loadChildren: './action-list/action-list.module#ActionListModule' }, //{ path: 'action-list', component: ActionListComponent }
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }  //{ path: 'auth', component: AuthComponent }
];
// configure routing mode and adds routing features
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
