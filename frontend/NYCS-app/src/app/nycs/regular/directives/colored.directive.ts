import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective implements OnInit {

  @Input() index: number;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!(this.index % 2)) this.renderer.setStyle(this.elem.nativeElement, 'background-color', '#FAFAFA')
  }

}
