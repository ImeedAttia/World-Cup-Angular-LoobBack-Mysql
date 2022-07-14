import { MAtchService } from './match.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 

  apiUrl = "http://localhost:3000/api/utilisateurs";


 
  constructor(public httpClient : HttpClient) {
   
   }
   getAllClients(){
    return this.httpClient.get<Client[]>(this.apiUrl);
 }
   getClientFid(id : number){
    return this.httpClient.get<Client>(this.apiUrl + "/" +id);
    }
    deleteClient(id : number){
      return this.httpClient.delete<any>(this.apiUrl + "/" +id);
      }
      ModifierClient(p : Client){
        return this.httpClient.put<any>(this.apiUrl, p);
        }
        AjouterClient(p : Client){
          return this.httpClient.post<any>(this.apiUrl,p);
          }
}
