import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[appMatchFocused]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class MatchFocusedDirective {

  @Input() public isEditMode: boolean;

  @Input() public isFocused: boolean; 
  @Output() public isFocusedChange: EventEmitter<boolean> = new EventEmitter()

  constructor(private elem: ElementRef, private store: Store) { }

  public onMouseEnter(): void {
    this.isFocusedChange.emit(true);
    if (!this.isEditMode) this.elem.nativeElement.classList.add('focus')
  }
  
  public onMouseLeave(): void {
    this.isFocusedChange.emit(false);
    if (!this.isEditMode) this.elem.nativeElement.classList.remove('focus')
  }
}
