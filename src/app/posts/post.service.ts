import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  //   private postSub = new Subject<Post[]>();
  private postSub = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPost() {
    // return [...this.posts];
    // return this.posts;
    this.http
      .get<{ message: string; posts: Post[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postData) => {
        // this.posts = [];
        this.posts = postData.posts;
        // console.log('this.data', postData, this.posts);
        this.postSub.next([...this.posts]);
      });
  }

  postupdateListener() {
    return this.postSub.asObservable();
  }

  onAddPost(title: string, content: string) {
    const post: Post = { id: '', title: title, content: content };
    this.posts.push(post);
    this.postSub.next([...this.posts]);
  }
}
