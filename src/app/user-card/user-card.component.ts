import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { RouterLink } from '@angular/router'; // <--- Import cái này
@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  constructor(private userService: UserService) { }
  @Input() user: any = {};
  @Output() friendRequest = new EventEmitter<string>();
  onBtnClick() {
    // Dùng cái loa (friendRequest) để phát đi tín hiệu
    // Kèm theo nội dung là tên (this.userName)
    this.friendRequest.emit(this.user.name);
  }
  deleteuser() {
    this.userService.deleteUser(this.user.id);
  }
}
