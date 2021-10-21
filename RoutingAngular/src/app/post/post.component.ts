import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  post:Post={title: '', text: '', id: 0};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postsSerice: PostsService,
    ){}

  backToAbout() {
    this.router.navigate(['/'])
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.post = this.postsSerice.getById(+params.id)!;
    })
  }
}
