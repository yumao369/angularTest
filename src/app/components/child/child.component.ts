import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((() => ChildComponent)),
    multi: true
  }]
})
export class ChildComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() name = ''
  @Output() ageChange = new EventEmitter<number>()
  age: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeage(): void {
    console.log('aaaaaaaa')
    this.ageChange.emit(this.age)
  }

  writeValue(value: number): void {
    this.age = value
  }

  private onValueChange(value: number): void { };
  private onTouched(): void { };

  registerOnChange(fn: (value: number) => void): void {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;

  }
}
