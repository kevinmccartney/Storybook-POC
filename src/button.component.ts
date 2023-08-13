import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-button',
  template: `
    <button (click)="onClick.emit($event)" mat-flat-button class="mat-flat-button mat-primary">{{ text }}</button>
  `,
})
export class ButtonComponent {
  @Input()
  text = '';
  @Output()
  onClick = new EventEmitter<any>();
}
