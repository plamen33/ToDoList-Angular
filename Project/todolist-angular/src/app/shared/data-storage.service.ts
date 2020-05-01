import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap, take, exhaustMap} from "rxjs/internal/operators";

import {TodoItem} from "../todoitems/todoitem.model";
import {TodoItemService} from "../todoitems/todoitem.service";
import {TodoAction} from "./todoaction.model";
import {AuthService} from "../auth/auth.service";
import {ActionListService} from "../action-list/action-list.service";
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  //todoactions : TodoAction[];

  constructor(private http: HttpClient, private todoitemService: TodoItemService, private authService: AuthService, private actionListService: ActionListService) {}

  storeTodoitems() {
    // var storedNames = JSON.parse(localStorage.getItem("names"));
    const todoitems = this.todoitemService.getTodoItems();
    this.http
      .put(
        'https://todolist-angular-343b6.firebaseio.com/todoitems.json',
        todoitems
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  storeTodoActions() {
    console.log("checking localStorage: ");
    console.log(localStorage.getItem('todoactions'));

    // before taking the todoactions do JSON.parse, as item in localStorage is in string format
    let todoactions = JSON.parse(localStorage.getItem('todoactions'));

    console.log("todoactions before PUT call are : ");
    console.log(todoactions);

    this.http
      .put(
        'https://todolist-angular-343b6.firebaseio.com/todoactions.json',
        todoactions
      )
      .subscribe(response => {
        console.log("Store ToDo Actions response is: ")
        console.log(response);
      });
  }


  fetchTodoitems() {

        return this.http.get<TodoItem[]>(
          'https://todolist-angular-343b6.firebaseio.com/todoitems.json'
        ).pipe(
      map(todoitems => {
        return todoitems.map(todoitem => {  // map observable operator allows to transform data in an observable chain
          return {
            ...todoitem,
            todoactions: todoitem.todoactions ? todoitem.todoactions : []
          };
        });
      }),
      tap(todoitems => {    // load todoitems from DB
        this.todoitemService.setTodoItems(todoitems);
      })
    );
  }

  fetchActionData(){
    //console.log("get action data !");
    return this.http.get<TodoAction[]>(
      'https://todolist-angular-343b6.firebaseio.com/todoactions.json'
    ).pipe(
      map(todoactions => {
        return todoactions.map(todoaction => {  // map observable operator allows to transform data in an observable chain
          return todoaction;
        });
      }),
      tap(todoactions => {    // load actions from DB
        this.actionListService.setTodoActions(todoactions);
      })
    );
  }

}


// https://todolist-angular-343b6.firebaseio.com/ is my DB link in Firebase
