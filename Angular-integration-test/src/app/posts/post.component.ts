import {Component, OnInit} from '@angular/core';
import {PostsService} from './post.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts: string[] = []
  message: string = '';

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.fetch().subscribe(p => {
      this.posts = p
    })
  }

  add(title: string) {
    const post: Object = { title }
    this.service.create(post).subscribe(() => {
      this.posts.push(post.toString())
    }, err => this.message = err)
  }

  delete(id: number) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe()
    }
  }
}
