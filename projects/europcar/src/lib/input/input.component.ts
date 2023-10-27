import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),//metti solo InputComponent
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() formControl!: FormControl;
  @Input() name:string="";
  @Input() type:string="text";
  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(){
  }
  registerOnChange(fn: any){
    this.onChange = fn;
  }
  registerOnTouched(fn: any){
    this.onTouched = fn;
  }
}
