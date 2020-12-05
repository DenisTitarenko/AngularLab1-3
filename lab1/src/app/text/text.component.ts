import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() font: string;
  @Output() isShown = new EventEmitter<boolean>();

  show(bool: boolean): void {
    this.isShown.emit(bool);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
