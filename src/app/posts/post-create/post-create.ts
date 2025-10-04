import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  standalone: false,
  styleUrl: './post-create.css'
})
export class PostCreate {
  enteredText = '';
  newPost = 'NO CONTENT';

  onAddPost() {
    // console.dir(postInput);
    this.newPost = this.enteredText;
  }
}
