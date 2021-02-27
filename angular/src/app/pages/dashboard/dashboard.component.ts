import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user:any;
  constructor(private authService:AuthService) { }

  async ngOnInit(){
    console.log('dashboard');
    this.user = await this.authService.getCurrentUser();
    if(this.user){
      console.log('user->',this.user);
    }
  }

}


