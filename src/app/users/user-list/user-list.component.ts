import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  @Output() userSelected = new EventEmitter<number>();

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  selectUser(userId: number): void {
    this.userSelected.emit(userId);
  }
}
