import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appInputValidate]'
})
export class InputValidateDirective implements OnChanges {

  @Input() isInvalid: boolean; 
  constructor(private elem: ElementRef) { }

  public ngOnChanges(): void {
    this.isInvalid 
      ? this.elem.nativeElement.classList.add('invalid')
      : this.elem.nativeElement.classList.remove('invalid')
  }
}
