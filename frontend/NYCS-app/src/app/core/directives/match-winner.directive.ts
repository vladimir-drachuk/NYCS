import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';
import { Team } from 'src/app/shared/models/team.model';

@Directive({
  selector: '[appMatchWinner]'
})
export class MatchWinnerDirective {

  @Input() match: Match;
  @Input() team: Team;

  constructor(private elem: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    if (this.match.isComplete && this.team._id === this.match.winner) {
      this.renderer2.setStyle(this.elem.nativeElement, 'font-weight', '700');
    } else {
      this.renderer2.setStyle(this.elem.nativeElement, 'font-weight', '400');
    }
  }
}
