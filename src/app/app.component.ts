import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'mean-course';
  // posts = [];
  posts: any = [];

  onAddpost(post: any) {
    this.posts.push(post);
    console.log('posts', post, this.posts);
  }
}
