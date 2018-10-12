import { Directive, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputShowHideComponent } from './input-show-hide/input-show-hide.component';

@Directive({
  selector: '[appInputShowHideForm]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: InputShowHideFormDirective, multi: true }
  ]
})
export class InputShowHideFormDirective implements ControlValueAccessor {
  private onChange: (value: string) => void;

  constructor(private host: InputShowHideComponent) {}

  @HostListener('valueChange', ['$event']) onValueChange(value) {
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.host.value = value;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(): void {}
}
