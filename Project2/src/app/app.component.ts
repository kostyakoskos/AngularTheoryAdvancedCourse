import {Component} from '@angular/core'
import { AppCounterService } from './services/app-counter.service';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appCounterService: AppCounterService){ }

  search = '';
  searchField:any = 'title';

  now:Date = new Date();
  posts: Post[] = [
    {title:"Bread", text:"nice bread for morning"},
    {title:"Newspaper", text:"All yesterday news"},
  ]
}
