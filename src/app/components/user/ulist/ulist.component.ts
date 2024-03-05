import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.component.html',
  styleUrl: './ulist.component.scss'
})
export class UlistComponent {

  constructor(private _user : AuthService){}

  ngOnInit(){
    this._user.getAll().subscribe({
      next : (data : any) => console.log(data)
    })
  }
}
