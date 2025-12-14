import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 1. Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

users = signal<any[]>([]);  // URL API giả lập (trả về 10 user)
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 2. Tiêm HttpClient vào constructor
  constructor(private http: HttpClient) { }

  // 3. Hàm trả về Observable (không trả về mảng trực tiếp nữa)
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  fetchUsers() {
    this.getUsers().subscribe(data => {
      this.users.set(data);
    });
  }

  // Tạm thời bỏ qua hàm deleteUser, tập trung lấy dữ liệu trước đã
  deleteUser(id: number) {
    // .update() nhận vào giá trị cũ, trả về giá trị mới
    // filter() tạo ra mảng mới -> ĐÚNG Ý BẠN
    this.users.update(currentUsers => 
      currentUsers.filter(u => u.id !== id)
    );
  }
}