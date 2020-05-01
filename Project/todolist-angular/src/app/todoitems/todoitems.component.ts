import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']

})
export class TodoItemsComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}



// this.todoItemService.todoItemSelected
//   .subscribe(  // we are get informed with any changes
//     (todoitem: TodoItem) => {
//       this.selectedTodoItem = todoitem;
//     }
//   );

// constructor(private todoItemService: TodoItemService) { }

//selectedTodoItem: TodoItem;


// providers: [TodoItemService]

// import {TodoItem} from "./todoitem.model";
//import {TodoItemService} from "./todoitem.service";
