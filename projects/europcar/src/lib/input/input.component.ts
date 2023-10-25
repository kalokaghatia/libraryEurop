import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()
  public type: string = "";
  @Input()
  public name : string = "";
  @Input()
  public placeholder: string = "";
  @Input()
  public min: string = "";
  @Input()
  public max: string = "";
}
