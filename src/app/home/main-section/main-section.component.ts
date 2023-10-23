import { TrackVisibilityDirective } from './../../customDirectives/track-visibility.directive';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  @ViewChild(TrackVisibilityDirective)
  TrackVisibilityDirective!: TrackVisibilityDirective;
  constructor(private renderer: Renderer2) {}

  //metodo aggiunta còasse con inViweport
  public onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }
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
