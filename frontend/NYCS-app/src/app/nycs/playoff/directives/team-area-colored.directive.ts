import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTeamAreaColored]'
})
export class TeamAreaColoredDirective implements OnInit{

  @Input() teamColor: string;
  @Input() isMirror: boolean;

  constructor(private elem: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderer2.setStyle(this.elem.nativeElement, 'border-bottom', `100px solid ${this.teamColor}`);
    if (this.isMirror) {
      this.renderer2.setStyle(this.elem.nativeElement, 'border-left', '30px solid transparent');
      this.renderer2.setStyle(this.elem.nativeElement.children[0], 'text-align', 'end');
      this.renderer2.setStyle(this.elem.nativeElement.children[1], 'left', '-55px');
    } else {
      this.renderer2.setStyle(this.elem.nativeElement, 'border-right', '30px solid transparent');
    }
  }

}
