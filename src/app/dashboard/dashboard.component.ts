import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: number;
  user: any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.userService.getUserById(this.userId).subscribe((res)=>{
      this.user = res;
    })
  }
  signOut(){
    sessionStorage.setItem('loggedIn','no')
    sessionStorage.setItem('userId','0');
  }
}
