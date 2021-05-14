import { Component } from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    { id: 2, title: "Next post", text: "Practice makes perfect" },
    { id: 1, title: "First post", text: "When the going gets tough, the tough get going" }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
