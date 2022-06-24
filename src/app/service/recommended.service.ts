import { HttpClient } from "@angular/common/http";
import { Inject,Injectable } from "@angular/core";
import { Recommended } from "../model/recommended.model";

@Injectable({
    providedIn: 'root',
})

export class RecommendedService{
     baseUrl: string = 'http://localhost:3000/recommendedBooks';
     constructor(private http: HttpClient){

     }
     getRecommended(){
        return this.http.get<Recommended[]>(this.baseUrl);
     }
}