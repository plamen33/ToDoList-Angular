import { Component, OnInit, OnDestroy } from '@angular/core';

import {TodoAction} from "../shared/todoaction.model";
import {ActionListService} from "./action-list.service";
import {Subscription} from "rxjs/index";
import {LoggingService} from "../logging.service";


@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit, OnDestroy {
  todoactions : TodoAction[];
  private subscription: Subscription;

  constructor(private alService: ActionListService, private loggingService: LoggingService) { }

  ngOnInit() {
    this.todoactions = this.alService.getTodoActions();
    this.subscription = this.alService.todoActionsChanged
      .subscribe(
        (todoactions: TodoAction[]) => {
          this.todoactions = todoactions;
        }
      );

    this.loggingService.printLog("Hello says action-list.component ngOnInit")
  }

  ngOnDestroy(){
    // prevent memory leaks
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.alService.startedEditing.next(index);
  }

}
