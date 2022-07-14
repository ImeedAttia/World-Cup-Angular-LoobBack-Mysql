import { Client } from './models/client';
import { ClientService } from './Service/client.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
 
  LesClient! : Client[];
  login=false;
  id!:number;

  constructor(public ps: ClientService,private router: Router){
   
  }
  logout(){
    this.login=false;
    this.router.navigateByUrl('/Match');
  }
  

  
 

  verifierLogin(f:NgForm){
    
    this.ps.getAllClients().subscribe(
      data => { this.LesClient = data;},
      error => {alert("erreur");}
    );
    let email = f.value['email'];
        let password = f.value['password'];
    this.LesClient.forEach(client => {
      if (client.email == email && client.password == password) {
        this.id=client.id;
        this.login = true;
        alert("vous ete connecte");
      }
    });
  }




   ajouter(f : NgForm){
    let nom = f.value['nom'];
    let prenom=f.value['Prenom'];
    let pays = f.value['pays'];
    let email = f.value['email'];
    let password = f.value['password'];
    let tel = f.value['tel'];
    let p : Client;
    p = new Client(nom,prenom,pays,email,password,tel);
    this.ps.AjouterClient(p).subscribe(
      data => {alert("ajouter Client avec succes");},
      error => {alert('echec ajout')}
    );
    
  }

}