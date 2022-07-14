import { Client } from './../models/client';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAtchService } from '../Service/match.service';
import { Match } from '../models/match';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  LesMatches : Match[] | undefined;

  LesClient : Client[] | undefined;
  constructor(public ps: ClientService,public ar: ActivatedRoute,private router: Router,public matchservice: MAtchService) {
    
    this.ps.getAllClients().subscribe(
      data => { this.LesClient = data;},
      error => {alert("erreur");}
    );
    this.matchservice.getAllMatches().subscribe(
      data => { this.LesMatches = data;},
      error => {alert("erreur");}
    );
   }

  valider(id : number ){
    this.ps.deleteClient(id).subscribe(
      data => {alert("supprision avec succes")},
      error => {alert('supprision erroneé')}
    );
    this.router.navigateByUrl('/Admin');
  }
  validermatch(id : number ){
    this.matchservice.deleteMatche(id).subscribe(
      data => {alert("supprision avec succes")},
      error => {alert('supprision erroneé')}
    );
    this.router.navigateByUrl('/Admin');
  }
  ngOnInit(): void {
  }
  
  
}
