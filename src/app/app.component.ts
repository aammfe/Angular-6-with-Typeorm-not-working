import { Component } from '@angular/core';
import { createConnection } from 'typeorm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';

  constructor() {
    createConnection()
      .then(connection => {
        // here you can start to work with your entities
      })
      .catch(error => console.log(error));
  }
}
