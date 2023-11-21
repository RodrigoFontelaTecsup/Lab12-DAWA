// post.service.ts
import { Injectable } from '@angular/core';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    new Post(1, 'Publicacion 1', 'Contenido de la publicación 1'),
    new Post(2, 'Publicacion 2', 'Contenido de la publicación 2'),
    new Post(3, 'Publicacion 3', 'Contenido de la publicación 3'),
    new Post(4, 'Publicacion 4', 'Contenido de la publicación 4'),
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }
}
