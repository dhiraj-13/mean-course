import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  standalone: false,
  styleUrl: './post-create.css',
})
export class PostCreate {
  // enteredText = '';
  // newPost = 'NO CONTENT';
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    // console.dir(postInput);
    // this.newPost = this.enteredText;
    // form.getControl('content').invalid;
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(post);
    this.postService.onAddPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
