import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  games:any;
  search={
    key:''
  }
  constructor(public http:HttpService,public router:Router) { }

  ngOnInit(): void {
    this.http.getGames().subscribe((data)=>{
      this.games=JSON.parse(JSON.stringify(data));
      
      })
  }
  searchfn(){
    localStorage.setItem("key",this.search.key);
    this.router.navigate(['result'])
  }
}
