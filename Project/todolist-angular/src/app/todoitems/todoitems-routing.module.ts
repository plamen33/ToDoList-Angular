import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodoItemsComponent} from "./todoitems.component";
import { AuthGuard } from '../auth/auth.guard';
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {TodoItemStartComponent} from "./todoitem-start/todoitem-start.component";
import {TodoItemEditComponent} from "./todoitem-edit/todoitem-edit.component";
import {TodoitemsResolverService} from "./todoitems-resolver.service";





const routes: Routes = [
  { path: '', component: TodoItemsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TodoItemStartComponent },
      { path: 'new', component: TodoItemEditComponent },
      { path: ':id', component: ItemDetailComponent, resolve: [TodoitemsResolverService] },
      { path: ':id/edit', component: TodoItemEditComponent, resolve: [TodoitemsResolverService]},
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoItemsRoutingModule {}
