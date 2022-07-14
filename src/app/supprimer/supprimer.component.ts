import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../Service/client.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  
  C!: Client;
  constructor(private router: Router,public ar: ActivatedRoute,public ps: ClientService) { 
    let id! :number;
    this.ar.params.subscribe(
      data => {id = data.id;}
    );

    this.ps.getClientFid(id).subscribe(
      data => {this.C = data ;}
    );
    
  }
  supprimer(id : number ){
    this.ps.deleteClient(id).subscribe(
      data => {alert("supprision avec succes")},
      error => {alert('supprision erroneé')}
    );
    this.router.navigateByUrl('/Admin');
    
  }

  ngOnInit(): void {
  }

}
