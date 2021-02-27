import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isLogged=false;
  public user:any;
  constructor(private authService:AuthService, private router:Router) { }

  async ngOnInit() {
    console.log('menu');
    this.user = await this.authService.getCurrentUser();
    if(this.user){
      this.isLogged=true;
      console.log('user->',this.user);
    }else{
      this.isLogged=false;
    }
  }

  async onLogout(){
    try{
      this.authService.logout();
      this.isLogged=false;
      this.router.navigate[''];
    }catch(error){
      console.log(error);
    }

  }

}
