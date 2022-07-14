import { Equipe } from './../models/equipe';
import { MAtchService } from './../Service/match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  C!: Match;
  path!:string;
  constructor(public ms: MAtchService,public ar: ActivatedRoute) {
    
    let id! :number;
    this.ar.params.subscribe(
      data => {id = data.id;}
    );
    this.ms.getMatcheFid(id).subscribe(
      data => {this.C = data ;}
    );
  
     
  }  


  ngOnInit(): void {
    
   
  }

}
