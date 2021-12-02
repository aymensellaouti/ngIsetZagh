import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  path = 'cv.png';
  @Input() size = 150;
  @Input() timer = 1000;
  @Input() paths = [
    '404.png',
    'as.jpg',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'cv.png'
  ];
  sliderObsevable: Observable<string> = null;
  sliderSubscription: Subscription = null;
  constructor() { }

  ngOnDestroy(): void {
        this.sliderSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.sliderObsevable = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            if (i == this.paths.length) {
              i = 0;
            }
            observer.next(this.paths[i++]);
          },
          this.timer
        );
      }
    );
    this.sliderSubscription = this.sliderObsevable.subscribe(
      (newPath) => {
        this.path = newPath;
      }
    )
  }

}
