import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}
  

  ngOnInit(): void {
  }

  userInfo = {
    email:"",
    password:""

  }

  userInfoValidator = {
    email:false,
    password:false

  }

  login(){
    if(this.userInfo.email === ""){
      console.log("Email vacio");
      this.userInfoValidator.email=true;
    }else{
      this.userInfoValidator.email=false;
    }
    if(this.userInfo.password === ""){
      console.log("Contraseña vacio");
      this.userInfoValidator.password=true;
    }else{
      this.userInfoValidator.password=false;
    }

    if(this.userInfo.email !=="" && this.userInfo.password !==""){
      sessionStorage.setItem('loggedUser', this.userInfo.email);
      this.router.navigate(['/dashboard']);
    }
  }

}
