import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

declare var VMasker: any;

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {

  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef, public render: Renderer) {
    console.log(element);
    this.nativeElement = this.element.nativeElement;
    VMasker(this.nativeElement).maskPattern('999.999.999-99');
  }

}
