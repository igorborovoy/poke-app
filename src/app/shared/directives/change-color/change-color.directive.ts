import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @HostBinding('style.backgroundColor') color: string;

  constructor() { }

  @HostListener('click') onClick(): void {
    this.color = this.generateRandomColor();
  }

  private generateRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
