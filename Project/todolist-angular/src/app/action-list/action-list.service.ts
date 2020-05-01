
import {TodoAction} from "../shared/todoaction.model";
import {Subject} from "rxjs/index";
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
// import { EventEmitter } from '@angular/core';

export class ActionListService {

  todoActionsChanged = new Subject<TodoAction[]>();
  startedEditing = new Subject<number>();
  // todoActionsChanged = new EventEmitter<TodoAction[]>();
  private todoactions: TodoAction[] = [
    // hardcoded data
    // new TodoAction('Learn Java', 5),
    // new TodoAction('Learn JavaScript', 10),
  ];

  setTodoActions(todoactions: TodoAction[]){
    this.todoactions = todoactions;
    this.todoActionsChanged.next(this.todoactions.slice());
  }

  getTodoActions() {
    localStorage.setItem('todoactions', JSON.stringify(this.todoactions.slice()) );
    return this.todoactions.slice();
  }

  getTodoAction(index: number) {
    return this.todoactions[index];
  }

  addTodoAction(todoaction: TodoAction) {
    this.todoactions.push(todoaction);
    this.todoActionsChanged.next(this.todoactions.slice());
    // this.todoActionsChanged.emit(this.todoactions.slice());  // for EventEmitter usage
  }

  addTodoActions(todoactions: TodoAction[]) {
    // for (let todoaction of todoactions) {
    //   this.addTodoAction(todoaction);
    // }
    this.todoactions.push(...todoactions);
    this.todoActionsChanged.next(this.todoactions.slice());
    // this.todoActionsChanged.emit(this.todoactions.slice());
  }

  updateTodoAction(index: number, newTodoAction: TodoAction ) {
    this.todoactions[index] = newTodoAction;
    this.todoActionsChanged.next(this.todoactions.slice());
  }

  deleteTodoAction(index: number ) {
    this.todoactions.splice(index, 1);
    this.todoActionsChanged.next(this.todoactions.slice());
  }

}
