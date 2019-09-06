import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  age: number = 26;
  status = 'false';
  getWorkDetails(){
    return this.age;
  }
  disableButton() {
   setTimeout(() => {
     this.status = 'false';
   }, 2000);
  }
  title = 'angular8project';
}
