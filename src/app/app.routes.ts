import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [// 1. Đường dẫn gốc (Trang chủ) -> Hiện HomeComponent
  { path: '', component: HomeComponent },
  
  // 2. Đường dẫn chi tiết (có tham số id) -> Hiện UserDetailComponent
  // :id là tham số động (1, 2, 3...)
  { path: 'user/:id', component: UserDetailComponent },];
