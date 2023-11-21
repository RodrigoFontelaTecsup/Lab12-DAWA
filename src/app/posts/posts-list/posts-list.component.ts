import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  @Output() postSelected = new EventEmitter<number>();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  selectPost(postId: number): void {
    this.postSelected.emit(postId);
  }
}
