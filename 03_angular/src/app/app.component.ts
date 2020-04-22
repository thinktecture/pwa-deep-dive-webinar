import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPwa';

  constructor(private databaseService: DatabaseService) {
  }

  add(value: string) {
    this.databaseService.todos.add({ title: value });
  }
}
