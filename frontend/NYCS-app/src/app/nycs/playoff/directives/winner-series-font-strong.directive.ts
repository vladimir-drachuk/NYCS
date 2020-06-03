import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Series } from 'src/app/shared/models/series.model';

@Directive({
  selector: '[appWinnerSeriesFontStrong]'
})
export class WinnerSeriesFontStrongDirective implements OnInit {

  @Input() series: Series;
  @Input('teamID') id: string;

  constructor(private elem: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    if (this.series.isComplete && this.series.winner === this.id)
      this.renderer2.setStyle(this.elem.nativeElement, 'font-weight', '700');
  }
}
