import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';

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
