import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  todos: Dexie.Table<any, number>;

  constructor() {
    super('MyTodoDatabase');
    this.version(1).stores({
      todos: '++id',
    });
    this.todos = this.table('todos');
  }
}
