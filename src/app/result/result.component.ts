import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
games:any;
key=localStorage.getItem("key")
  constructor(public http:HttpService) { }

  ngOnInit(): void {
    this.http.getGames().subscribe((data)=>{
      this.games=JSON.parse(JSON.stringify(data));
      this.games=this.games.find((p: { title: string | null; })=> p.title===this.key)
      console.log(this.games)
      })
  }

}
