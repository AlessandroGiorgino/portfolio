import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  // constructor(private element: ElementRef, private renderer: Renderer2) {}
  // inside: any;
  // inViewport(el: any) {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }
  // ngOnInit() {
  //   this.inViewport();
  // }
  // box = document.querySelector('.box');
  // check() {
  //   document.addEventListener(
  //     'scroll',
  //     function () {
  //       if (isInViewport(this.box))
  //         console.log('The box is visible in the viewport');
  //       else 'The box is not visible in the viewport';
  //     },
  //     {
  //       passive: true,
  //     }
  //   );
  // }
}
