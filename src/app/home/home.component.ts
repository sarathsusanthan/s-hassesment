import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
games:any
search={
  key:''
}
  constructor(public http:HttpService,public router:Router) { }

  ngOnInit(): void {
this.http.getGames().subscribe((data)=>{
this.games=JSON.parse(JSON.stringify(data));

})
  }
  navigate(){
this.router.navigate(['list'])
  }
  searchfn(){
    localStorage.setItem("key",this.search.key);
    this.router.navigate(['result'])
  }
}
