import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {TodoItem} from "../todoitem.model";
import {TodoItemService} from "../todoitem.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  todoitem: TodoItem;
  id: number;

  constructor(private todoItemService: TodoItemService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  //  params['id'] returns a String, so we have to cast it to a number -> +params['id'];
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.todoitem = this.todoItemService.getTodoItem(this.id);
        }
      );
  }

  onAddToActionList() {
    this.todoItemService.addTodoActionsToActionList(this.todoitem.todoactions);
  }

  onEditTodoItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // alternative navigation:
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteTodoItem() {
    this.todoItemService.deleteTodoItem(this.id);
    this.router.navigate(['/todoitems']);
  }

}
