import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInfo = {
    userName:"",
    email:"",
    password:""

  }

  userInfoValidator = {
    userName:false,
    email:false,
    password:false

  }

  registrar(){
    if(this.userInfo.userName === ""){
      console.log("Nombre vacio");
      this.userInfoValidator.userName=true;
    }else{
      this.userInfoValidator.userName=false;
    }
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

    if(this.userInfo.userName !=="" && this.userInfo.email !=="" && this.userInfo.password !==""){
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
    }
    console.log("funciona");
    console.log(this.userInfo);
  }

}
