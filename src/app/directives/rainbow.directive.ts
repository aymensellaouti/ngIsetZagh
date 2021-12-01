import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  // Quels propriétés je gére
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor(
    private element: ElementRef
  ) { }
  // Quels events je gére
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }

  @HostListener('dblclick') ondbClick() {
    console.log('dblclick');
    this.element.nativeElement.value = '';
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
