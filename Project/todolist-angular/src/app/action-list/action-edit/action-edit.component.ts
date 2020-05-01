import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {NgForm } from  '@angular/forms';

import {ActionListService} from "../action-list.service";
import {TodoAction} from "../../shared/todoaction.model";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-action-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.css']
})
export class ActionEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') alForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: TodoAction;


  constructor(private alService: ActionListService) { }

  ngOnInit() {
    this.subscription = this.alService.startedEditing.subscribe(

      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.alService.getTodoAction(index);
        this.alForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }

    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodoAction = new TodoAction(value.name, value.amount);
    if (this.editMode){
      this.alService.updateTodoAction(this.editedItemIndex, newTodoAction);
    } else {
      this.alService.addTodoAction(newTodoAction);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear() {
    this.alForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.alService.deleteTodoAction(this.editedItemIndex);
    this.onClear();
  }

}
