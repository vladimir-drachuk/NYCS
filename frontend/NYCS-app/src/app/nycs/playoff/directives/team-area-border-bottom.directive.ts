import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTeamAreaBorderBottom]'
})
export class TeamAreaBorderBottomDirective implements OnInit {

  @Input() color: string;

  constructor(private elem: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderer2.setStyle(this.elem.nativeElement, 'border-bottom', `5px solid ${this.color}`);
  }
}
