import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Directive({
  selector: '[appWinnerMatchFontStrong]'
})
export class WinnerMatchFontStrongDirective implements OnInit {

  @Input() match: Match;
  @Input() teamID: string;

  constructor(private elem: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    if (this.match.isComplete && this.match.winner === this.teamID) {
      this.renderer2.setStyle(this.elem.nativeElement, 'font-weight', '700');
    }
  }
}
