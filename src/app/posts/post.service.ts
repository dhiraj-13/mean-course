import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, Subject } from 'rxjs';
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
      // .get<{ message: string; posts: Post[] }>(
      .get<{ message: string; posts: any }>('http://localhost:3000/api/posts')
      .pipe(
        map((postData) => {
          return postData.posts.map((post: any) => {
            return { title: post.title, content: post.content, id: post._id };
          });
        })
      )
      .subscribe((transformedPosts) => {
        // this.posts = [];
        this.posts = transformedPosts;
        // console.log('this.data', postData, this.posts);
        this.postSub.next([...this.posts]);
      });
  }

  postupdateListener() {
    return this.postSub.asObservable();
  }

  onAddPost(title: string, content: string) {
    const post: Post = { id: '', title: title, content: content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log('responseData is ', responseData);
        this.posts.push(post);
        this.postSub.next([...this.posts]);
      });
    // this.posts.push(post);
    // this.postSub.next([...this.posts]);
  }

  onDeletePost(postId: string) {
    this.http
      .delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        console.log('Deleted!');
      });
  }
}
