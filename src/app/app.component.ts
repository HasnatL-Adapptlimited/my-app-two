import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Title';

  constructor() {
    this.changeTitle(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular';
  }

  private changeTitle(callback: Function) {
    this.changeTitle(this.setTitle);
  }


}
