import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  //con il selettore la usiamo su qualsiasi tag html
  selector: '[appTrackVisibility]',
})
export class TrackVisibilityDirective implements OnInit {
  observer!: IntersectionObserver;
  visibleOrNot!: boolean;

  @Input()
  isVisible = new EventEmitter<boolean>();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          this.isVisible.emit(e.isIntersecting);
          console.log(e.isIntersecting);
          this.visibleOrNot = e.isIntersecting;
        });
      },
      { rootMargin: '-50px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
