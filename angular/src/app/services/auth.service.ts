import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;
import { first } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  user?:User;
  public userData$:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe((user) =>{
      if(user){
        this.setUser(user);
      }
    });
    this.userData$=this.afAuth.authState;
  }

  setUser(user:User){
    this.user=user;
   }

   get isLoggedIn():boolean{
     return (this.user != undefined)
   }

  login(email:string, password:string): Promise <any>{
    try{
      this.afAuth.authState.subscribe((user) =>{
      if(user){
        this.setUser(user);
      }
    });
      return this.afAuth.signInWithEmailAndPassword(email,password);
    }catch(error){
      console.log(error);
    }
    
   }

  logout(): Promise <any>{
    return this.afAuth.signOut();
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
