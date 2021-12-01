import { Injectable } from '@angular/core';
import {Todo} from "../Model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() { }
  //AddTodo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  //DeleteTodo
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if(index != -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
  //LogTodo
  loggerTodos(): void {
    console.log(this.todos);
  }
  //getLisTodos
  getTodos(): Todo[] {
    return this.todos;
  }
}
