import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

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

  constructor(private elem: ElementRef) { }

  public onMouseEnter(): void {
    this.isFocusedChange.emit(true);
    if (!this.isEditMode) this.elem.nativeElement.classList.add('focus')
  }
  
  public onMouseLeave(): void {
    this.isFocusedChange.emit(false);
    if (!this.isEditMode) this.elem.nativeElement.classList.remove('focus')
  }
}
