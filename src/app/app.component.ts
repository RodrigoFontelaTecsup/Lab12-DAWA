import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPostId: number | undefined;
  selectedUserId: number | undefined;

  onPostSelected(postId: number): void {
    this.selectedPostId = postId;
  }

  onUserSelected(userId: number): void {
    this.selectedUserId = userId;
  }

  title = 'Lab-12';
}
