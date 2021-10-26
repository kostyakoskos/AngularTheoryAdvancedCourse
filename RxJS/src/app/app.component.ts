import { Component } from '@angular/core';
import { interval, Subscriber, Subscription, Observable, Subject} from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription

  stream$: Subject<void> = new Subject<void>();


  constructor() {

    this.sub = this.stream$.subscribe(value => {
      console.log('Subscribe', value)
    })

      // const intervalStream$ = interval(1000);

      // this.sub = intervalStream$
      // .pipe(
      //  filter(value => (+value % 2) !== 0),
      //  map((value) => `Mapped value ${value}`
      //  ),       
      // )
      // .subscribe((value) => {
      //   console.log(value);
      // })

      // const stream$ = new Observable( observer => {
      //   setTimeout( () => {
      //     observer.next(1)
      //   }, 1500)

      //   setTimeout( () => {
      //     observer.next(2)
      //   }, 2000)

      //   setTimeout( () => {
      //     observer.error('Something went wrong')
      //   }, 2000)
      //   setTimeout( () => {
      //     observer.complete()
      //   }, 2000)
      // })

      // this.sub = stream$ 
      //   .subscribe( 
      //     value => console.log(value),
      //     error => console.log(error),
      //     () => console.log('Complete'),
      //   )
  }

  stop(){
    this.sub.unsubscribe();
  }

  next(){
    this.stream$.next();
  }
}