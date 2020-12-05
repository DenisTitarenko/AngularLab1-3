import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab1';
  ifLogged = false;
  @Input() show: boolean;

  change(): void {
    this.ifLogged = !this.ifLogged;
  }
  isShown(): void {
    this.show = true;
  }
}
