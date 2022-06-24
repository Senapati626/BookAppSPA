import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/users.service';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
   ){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      userPassword: ['']
    });
  }

  onSubmit(){
    console.log('User details sent to server..');
    this.userService.addUsers(this.registerForm.value)
    .subscribe((data)=>{
      console.log('Data Saved');
      this.router.navigate(['dashboard']);
    })
  }

}
