// user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    new User(1, 'Usuario 1', 'usuario1@example.com'),
    new User(2, 'Usuario 2', 'usuario2@example.com'),
    new User(3, 'Usuario 3', 'usuario3@example.com'),
    new User(4, 'Usuario 4', 'usuario4@example.com'),
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
