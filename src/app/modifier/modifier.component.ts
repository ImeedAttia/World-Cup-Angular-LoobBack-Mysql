import { Client } from './../models/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../Service/client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  C!: Client;
  constructor(public ar: ActivatedRoute,public ps: ClientService,private router: Router) { 
    let id! :number;
    this.ar.params.subscribe(
      data => {id = data.id;}
    );

    this.ps.getClientFid(id).subscribe(
      data => {this.C = data ;}
    );
    
  }



  modifier(f : NgForm){
    let nom = f.value['nom'];
    let prenom=f.value['prenom'];
    let tel = f.value['tel'];
    let email = f.value['email'];
    let pays = f.value['pays'];
    let password = f.value['password'];
  if (nom !="" && prenom !="" && email !="" && password !="" && pays !="" && tel != "") {
    this.C.nom = nom;
    this.C.tel = tel;
    this.C.prenom = prenom;
    this.C.pays = pays;
    this.C.email = email;
    this.C.password = password;
    this.ps.ModifierClient(this.C).subscribe(
      data => {alert("Modife produit avec succes");},
      error => {alert('echec Modification')}
    );
  }else alert("saisier les champs");
  this.router.navigateByUrl('/Admin');
  }
  ngOnInit(): void {
  }

}
