import {TodoAction} from "../shared/todoaction.model";
export class TodoItem {
  public name: string;
  public description: string;
  public imagePath: string;
  public todoactions: TodoAction[];

  constructor(name: string, desc: string, imagePath: string, todoactions: TodoAction[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.todoactions = todoactions;
  }
}
