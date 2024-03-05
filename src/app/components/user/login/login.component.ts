import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private _auth : AuthService
  ){}

  login(){
    this._auth.login({email : "test@mail.com", password : "Test1234"})
  }
}
