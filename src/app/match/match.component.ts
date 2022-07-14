import { Match } from './../models/match';
import { MAtchService } from './../Service/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  LesProduit : Match[] | undefined;
  constructor(public matchservice: MAtchService) {
    
    this.matchservice.getAllMatches().subscribe(
      data => { this.LesProduit = data;},
      error => {alert("erreur");}
    );
   }

  
  ngOnInit(): void {
  }

}
