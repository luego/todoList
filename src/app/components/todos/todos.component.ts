import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo> = [];
  name = new FormControl('');

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getAll();
  }

  onSubmit() {
    const newTodo: Todo = {
      name: this.name.value,
      completed: false
    };
    this.todoService.add(newTodo);
    this.name.setValue('');
  }

  edit(todo: Todo) {
    // todo.completed = !todo.completed;
    this.todoService.complete(todo);
  }
}
