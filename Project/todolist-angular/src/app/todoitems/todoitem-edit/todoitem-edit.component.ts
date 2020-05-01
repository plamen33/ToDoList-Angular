import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {TodoItemService} from "../todoitem.service";
// import {TodoItem} from "../todoitem.model";
@Component({
  selector: 'app-todoitem-edit',
  templateUrl: './todoitem-edit.component.html',
  styleUrls: ['./todoitem-edit.component.css']
})
export class TodoItemEditComponent implements OnInit {
  id: number;
  editMode = false;
  todoItemForm: FormGroup;
  
  get todoactionsControls() {
    return (this.todoItemForm.get('todoactions') as FormArray).controls;
  }

  constructor(private route: ActivatedRoute,
              private todoItemService: TodoItemService,
              private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newTodoItem = new TodoItem(
    //   this.todoItemForm.value['name'],
    //   this.todoItemForm.value['description'],
    //   this.todoItemForm.value['imagePath'],
    //   this.todoItemForm.value['todoActions']);
    if (this.editMode) {
      this.todoItemService.updateTodoItem(this.id, this.todoItemForm.value); //this.todoItemForm.value
    } else {
      this.todoItemService.addTodoItem(this.todoItemForm.value);
    }
    this.onCancel();
  }

  onAddTodoAction(){
    (<FormArray>this.todoItemForm.get('todoactions')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }



  onDeleteTodoAction(index: number) {
    (<FormArray>this.todoItemForm.get('todoactions')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  private initForm() {
    let todoItemName = '';
    let todoItemImagePath = '';
    let todoItemDescription = '';
    let todoItemActions = new FormArray([]);

    if (this.editMode) {
      console.log("edit mode entered")
      const todoitem = this.todoItemService.getTodoItem(this.id);
      todoItemName = todoitem.name;
      todoItemImagePath = todoitem.imagePath;
      todoItemDescription = todoitem.description;
      if (todoitem['todoactions']) {
        for (let todoAction of todoitem.todoactions) {
          todoItemActions.push(
            new FormGroup({
              'name': new FormControl(todoAction.name, Validators.required),
              'amount': new FormControl(todoAction.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.todoItemForm = new FormGroup({
      'name': new FormControl(todoItemName, Validators.required),
      'imagePath': new FormControl(todoItemImagePath, Validators.required),
      'description': new FormControl(todoItemDescription, Validators.required),
      'todoactions': todoItemActions
    });
  }

}
