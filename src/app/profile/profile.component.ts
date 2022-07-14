import { ClientService } from './../Service/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  clientservice!: Client;
  constructor(public ar: ActivatedRoute,public ps: ClientService) { 
    let id! :number;
    this.ar.params.subscribe(
      data => {id = data.id;}
    );

    this.ps.getClientFid(id).subscribe(
      data => {this.clientservice = data ;}
    );
    
  }

  ngOnInit(): void {
  }

}
