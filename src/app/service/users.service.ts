import { HttpClient } from "@angular/common/http";
import { Inject,Injectable } from "@angular/core";
import { User } from "../model/users.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService{
     baseUrl: string = 'http://localhost:3000/users';
     private messageSource = new BehaviorSubject<any>({"id":0});
     currentMessage = this.messageSource.asObservable();
     constructor(private http: HttpClient){

     }
     getUsers(){
        return this.http.get<User[]>(this.baseUrl);
     }
     getUserById(id:number){
         return this.http.get<User>(this.baseUrl+'/'+id);
     }
     addUsers(user: User){
        return this.http.post(this.baseUrl,user);
     }
     changeMessage(message: number){
      this.messageSource.next(message)
     }
}