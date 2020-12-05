import {Component, ViewChild} from '@angular/core';
import {Comp2Component} from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  string = 'Lorem ipsum dolor sit amet, GKJKJFLKFFLK' +
    'consectetur adipisiGKJing elit. Eligendi non quis exercitationem culpa nesciunt ' +
    'nihil aut nostrum Explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
  isLoggedIn = false;
  currentDate = new Date();
  value = 120000000;
  @ViewChild(Comp2Component, {static: false}) countComp: Comp2Component;
  login(): void {
    this.isLoggedIn = true;
  }
  increment(): void {
    this.countComp.increment();
  }
  decrement(): void {
    this.countComp.decrement();
  }
}
