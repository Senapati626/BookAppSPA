import { Component, OnInit } from '@angular/core';
import { Recommended } from '../model/recommended.model';
import { RecommendedService } from '../service/recommended.service';
import { UserService } from '../service/users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recommended?: Recommended[];
  message: any;
  
  constructor(private recommendedService: RecommendedService, private userService: UserService){}

  ngOnInit(): void {
      this.recommendedService.getRecommended().subscribe((data)=>{
        this.recommended  = data;
        console.log("Data: "+data)
      });
      this.userService.currentMessage.subscribe(message=>this.message = message)
  }
}
