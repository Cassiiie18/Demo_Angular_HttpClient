import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  list : any
  constructor(private _movieService : MovieService){}

  ngOnInit(){
    this._movieService.getAll().subscribe({
      next : (data : any) => this.list = data,
      error : (error) => {console.log(error)},
      complete : () => console.log("j'ai fini de bosser")
    })
  }
}
