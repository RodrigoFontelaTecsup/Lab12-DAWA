import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  // @Input() userId: number | undefined;
  // user: User | undefined;

  userId: number | undefined;
  // constructor(private userService: UserService) { }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
    });
  }

  // ngOnChanges(): void {
  //   if (this.userId !== undefined) {
  //     this.user = this.userService.getUserById(this.userId);
  //   }
  // }
}
