import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostCreate } from './posts/post-create/post-create';

@NgModule({
  declarations: [AppComponent, PostCreate],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
