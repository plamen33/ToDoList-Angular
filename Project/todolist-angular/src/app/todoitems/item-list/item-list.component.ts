import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs/index";

import {TodoItem} from "../todoitem.model";
import {TodoItemService} from "../todoitem.service";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {

  todoitems : TodoItem[];
  subscription: Subscription;
  
  constructor(private todoItemService: TodoItemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.todoItemService.todoItemsChanged.subscribe((todoitems : TodoItem[]) => {
       this.todoitems = todoitems;
     });
     this.todoitems = this.todoItemService.getTodoItems();
  }

  onNewTodoItem() {
    // 'new' is a relative route
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
}
