import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  });

  public isLogged=false;
  constructor(private authService: AuthService, private router:Router) {}
  

  ngOnInit(): void {
  }

  async onLogin (){
    const {email, password}=this.loginForm.value;
    if(email !=="" && password){
      try{
        const response = await this.authService.login(email,password);
        if(response){
          this.isLogged=false;
          this.router.navigate(['/dashboard']);
        }
      }catch(error){
        this.isLogged=true;
        console.log(error);
      }
    }else{
      this.isLogged=true;
    }
  }

}
