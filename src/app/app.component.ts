import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standup';
  team = ['Nate', 'CJ', 'Marcus'];
  started = false;

  setStarted() {
    this.started = true;
  }
}
