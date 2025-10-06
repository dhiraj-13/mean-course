import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  // imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: "This is first post's content" },
  //   { title: 'Second Post', content: "This is second post's content" },
  //   { title: 'Third Post', content: "This is third post's content" },
  // ];
  //  @Input() posts: any = [];
  posts: Post[] = [];
  private unsubPost!: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    // this.posts = this.postService.getPost();
    this.postService.getPost();
    this.unsubPost = this.postService
      .postupdateListener()
      .subscribe((post: Post[]) => {
        this.posts = post;
      });
  }

  ngOnDestroy(): void {
    this.unsubPost.unsubscribe();
  }
}
