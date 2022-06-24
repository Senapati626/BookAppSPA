import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommended } from './model/recommended.model';
import { RecommendedService } from './service/recommended.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BookAppSPA';
}

