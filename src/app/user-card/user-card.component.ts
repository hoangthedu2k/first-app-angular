import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() userName: string = 'Người dùng ẩn danh';
  @Output() friendRequest = new EventEmitter<string>();
  onBtnClick() {
    // Dùng cái loa (friendRequest) để phát đi tín hiệu
    // Kèm theo nội dung là tên (this.userName)
    this.friendRequest.emit(this.userName);
  }
}
