import { Component, OnInit, Input } from '@angular/core';

import { TodoItem } from '../../todoitem.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoitem: TodoItem;
  @Input() index: number;
  
  // // to listen to the event from outside:
  // @Output() todoItemSelected = new EventEmitter<void>();

  ngOnInit() {
  }

  // old code :
  // onSelected() {
  //   this.todoItemService.todoItemSelected.emit(this.todoitem);
  // }

}
