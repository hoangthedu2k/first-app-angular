import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, UserCardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  yourName: string = '';
  title = 'Xin chào, Tôi tên là Hoàng Thế Du';
  users: any[]= [];
  constructor(public userService: UserService) {
    // Lấy dữ liệu từ service
    this.userService.fetchUsers();
    // GỌI API
    // this.userService.getUsers().subscribe(
    //   (data: any) => {
    //     // Code trong này chỉ chạy KHI server trả về dữ liệu
    //     console.log('Dữ liệu đã về:', data);
    //     this.users = data;
    //   }
    // );
  }
  increase() {
    this.count++;
    console.log('Count increased to:', this.count);
  }
  decresase() {
    if(this.count <= 0) {
      console.log('Count is already at zero, cannot decrease further.');
      return;
    }
    this.count--;
    console.log('Count decreased to:', this.count);

  }
  handleFriendRequest(name: string) {
    alert('Đã gửi lời mời kết bạn tới: ' + name);
  }

}
