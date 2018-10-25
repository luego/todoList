import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<Todo>;

  constructor() {
    this.todos = [];
  }

  getAll(): Array<Todo> {
    return this.todos;
  }

  add(todo: Todo): Array<Todo> {
    this.todos.push(todo);
    return this.todos;
  }

  complete(todo: Todo) {
    const found = this.todos.find(x => x.name === todo.name);
    if (found) {
      found.completed = !todo.completed;
    }
  }

  remove(todo: Todo) {}
}
