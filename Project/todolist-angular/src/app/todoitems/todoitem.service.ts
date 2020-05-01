import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";

import {TodoItem} from "./todoitem.model";
import {TodoAction} from "../shared/todoaction.model";
import {ActionListService} from "../action-list/action-list.service";



@Injectable()
export class TodoItemService {
  // todoItemSelected = new EventEmitter<TodoItem>();
  todoItemsChanged = new Subject<TodoItem[]>();

  // hard code data I used for initial set and storage:
  // private todoitems: TodoItem[] = [
  //   new TodoItem(
  //     'Learn JavaScript',
  //     'JavaScript is a good language - just awesome!',
  //     'https://senelda.com/wp-content/uploads/2017/10/6.png',
  //     [
  //       new TodoAction('Learn Fundamentals', 1),
  //       new TodoAction('Learn JS Advanced', 2)
  //     ]),
  //   new TodoItem('Learn JavaScript Frameworks',
  //     'What else you need to learn?',
  //     'https://automationpanda.files.wordpress.com/2018/01/angular-card.png',
  //     [
  //       new TodoAction('Learn Angular', 1),
  //       new TodoAction('Learn ReactJS', 3)
  //     ])
  // ];

  private todoitems: TodoItem[] = [];

  constructor(private alService: ActionListService) {}

  setTodoItems(todoitems: TodoItem[]){
    this.todoitems = todoitems;
    this.todoItemsChanged.next(this.todoitems.slice());
  }

  getTodoItems() {
    return this.todoitems.slice();
  }

  getTodoItem(index: number) {
    return this.todoitems[index];
  }

  addTodoActionsToActionList(todoactions: TodoAction[]) {
    this.alService.addTodoActions(todoactions);
  }

  addTodoItem(todoItem: TodoItem){
      this.todoitems.push(todoItem);
      this.todoItemsChanged.next(this.todoitems.slice());
  }

  updateTodoItem(index: number, newTodoItem: TodoItem){
     this.todoitems[index] = newTodoItem;
     this.todoItemsChanged.next(this.todoitems.slice());
  }

  deleteTodoItem(index: number) {
    this.todoitems.splice(index, 1);
    this.todoItemsChanged.next(this.todoitems.slice());
  }
}
