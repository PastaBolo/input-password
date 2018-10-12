import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-show-hide',
  templateUrl: './input-show-hide.component.html',
  styleUrls: ['./input-show-hide.component.css']
})
export class InputShowHideComponent {
  show = false;
  @Input() value: string = null;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value): void {
    this.valueChange.emit(value);
  }
}
