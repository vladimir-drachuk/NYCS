import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCarouselButtons]',
  host: {
    '(mouseenter)' : 'showButtons()',
    '(mouseleave)' : 'hideButtons()',
  }
})
export class CarouselButtonsDirective {

  @Output() isBtnChange: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  public showButtons(): void {
    this.isBtnChange.emit(true);
  }

  public hideButtons(): void {
    this.isBtnChange.emit(false);
  }

}
