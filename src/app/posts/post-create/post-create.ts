import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  standalone: false,
})
export class PostCreate {
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = 'You will get Everything Soon';
  }
}
