import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {TodoItemsComponent} from "./todoitems.component";
import {TodoItemComponent} from "./item-list/todo-item/todo-item.component";
import {TodoItemStartComponent} from "./todoitem-start/todoitem-start.component";
import {TodoItemEditComponent} from "./todoitem-edit/todoitem-edit.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {TodoItemsRoutingModule} from "./todoitems-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    TodoItemsComponent,
    TodoItemComponent,
    TodoItemStartComponent,
    TodoItemEditComponent,
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [RouterModule,
           // CommonModule,
    ReactiveFormsModule,
    TodoItemsRoutingModule,
    SharedModule
  ]
  // ,  // have to do these imports here
  // exports: [
  //   TodoItemsComponent,
  //   TodoItemComponent,
  //   TodoItemStartComponent,
  //   TodoItemEditComponent,
  //   ItemListComponent,
  //   ItemDetailComponent
  // ]
})
export class TodoItemsModule {}
