import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click') onClick(): void {
    this.changeColor(this.generateRandomColor());
  }

  @HostBinding('style.cursor') get getCursor(): string {
    return 'pointer';
  }


  private changeColor(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }

  private generateRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
