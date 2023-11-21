import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent {
  // @Input() postId: number | undefined;
  // post: Post | undefined;

  postId: number | undefined;

  // constructor(private postService: PostService) { }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
    });
  }

  // ngOnChanges(): void {
  //   if (this.postId !== undefined) {
  //     this.post = this.postService.getPostById(this.postId);
  //   }
  // }
}

