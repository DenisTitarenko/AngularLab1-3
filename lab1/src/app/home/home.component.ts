import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'naghk';
  count = 0;
  status = false;

  countIncrease(): void {
    this.count++;
    if (this.count > 30) { this.status = true; }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
