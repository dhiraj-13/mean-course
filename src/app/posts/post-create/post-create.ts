import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  standalone: false,
  styleUrl: './post-create.css'
})
export class PostCreate {
  // enteredText = '';
  // newPost = 'NO CONTENT';
  enteredTitle='';
  enteredContent=''
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    // console.dir(postInput);
    // this.newPost = this.enteredText;
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }
}
