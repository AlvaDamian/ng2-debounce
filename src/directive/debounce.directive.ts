import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[ng2-debounce]'
})
export class Ng2DebounceDirective implements OnInit, OnDestroy {

  @Input() ng2dEvent: string | string[];
  @Input() ng2dDelay: number = 3000;

  @Output() ng2dOnEvent: EventEmitter<any>;

  private subscriptions: Subscription[];

  constructor(private el: ElementRef) {


    this.ng2dOnEvent = new EventEmitter<any>();
    this.subscriptions = new Array<Subscription>();
  }

  ngOnInit() {

    if (!Array.isArray(this.ng2dEvent)) {

      this.subscriptions.push(this.subscribeTo(this.ng2dEvent));

    } else {

      this
      .ng2dEvent
      .forEach(e => {
        this.subscriptions.push(this.subscribeTo(e));
      });
    }
  }

  private subscribeTo(event: string): Subscription {

    return Observable
            .fromEvent(this.el.nativeElement, event)
              .debounceTime(this.ng2dDelay)
              .subscribe($event => {

                this.ng2dOnEvent.emit($event);
              })
  }

  ngOnDestroy() {

    this
    .subscriptions
    .forEach(s => s.unsubscribe());
  }
}
