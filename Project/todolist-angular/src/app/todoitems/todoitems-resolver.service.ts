import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {TodoItem} from "./todoitem.model";
import { DataStorageService } from '../shared/data-storage.service';
import {TodoItemService} from "./todoitem.service";


@Injectable({ providedIn: 'root' })
export class TodoitemsResolverService implements Resolve<TodoItem[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private todoitemsService: TodoItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const todoitems = this.todoitemsService.getTodoItems();

    if (todoitems.length === 0) {
      return this.dataStorageService.fetchTodoitems();
    } else {
      return todoitems;
    }
  }
}
