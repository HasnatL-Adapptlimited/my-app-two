import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Title';
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  })

  constructor() {
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  }

}
