import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hz',
  templateUrl: './hz.component.html',
  styleUrls: ['./hz.component.css']
})
export class HzComponent implements OnInit {
  visibility = true;

  toggle(): void {
    this.visibility = !this.visibility;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
