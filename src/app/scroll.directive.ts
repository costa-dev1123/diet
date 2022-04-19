import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private el: ElementRef) { }

  @HostListener('scroll') customerScroll() {
    let element: any = this.el.nativeElement;
    // //  element.scrollTop = Math.max(0, element.scrollHeight - element.offsetHeight);
    // let scroll = element.scrollHeight - Math.round(element.scrollTop) === element.clientHeight;

    // if(scroll){

    // }
    if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
      // console.log("End");
      // element.style.position = 'absolute';
      if (element.lastChild) {
        element.lastChild['style'].visibility = 'hidden'

      }
      // element.children[element.children.length - 1].style

    } else{
      if (element.lastChild) {
        element.lastChild['style'].visibility = 'visible'

      }

    }
  }

}
