import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  userId: string | null = ''; // Biến để lưu ID lấy được
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // 3. Lấy tham số 'id' từ URL
    // .snapshot: Chụp lại trạng thái URL ngay lúc component vừa hiện ra
    // .paramMap: Bản đồ các tham số
    // .get('id'): Lấy giá trị của tham số tên là 'id' (do bạn đặt :id bên app.routes.ts)
    this.userId = this.route.snapshot.paramMap.get('id');
    
    console.log('ID lấy được là:', this.userId);
  }
}
