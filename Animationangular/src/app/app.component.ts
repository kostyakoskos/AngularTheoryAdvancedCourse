import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box',[
      state('start', style({background: 'blue'})),
      state('end', style({background:'green', transform: 'scale(1.2)' })),
      state('special', style({
        background: 'red',
        transform: 'scale(0.3)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(2000)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special => *', animate(500)),
      transition('* => special', [
        style({background: 'green'}), 
        animate(1000, style({
            background: 'pink'
        }))
      ]),
      transition('void => *', [
        style({opacity: 0}), animate(750)
      ]),
    ])
  ]
   

})
export class AppComponent {
  visible = true;
  boxState = 'start';

  animate(){
    this.boxState = this.boxState == 'end' ? 'start': 'end';
  }
}
