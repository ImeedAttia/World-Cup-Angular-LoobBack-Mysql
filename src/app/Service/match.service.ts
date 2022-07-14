import { Match } from './../models/match';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MAtchService {

  apiUrl = "http://localhost:3000/api/Matches";
 
    constructor(public httpClient : HttpClient) { 
   
    }
    
    
    getAllMatches(){
      return this.httpClient.get<Match[]>(this.apiUrl);
    }
   
  
    getMatcheFid(id : number){
      return this.httpClient.get<Match>(this.apiUrl + "/" +id);
      }
      deleteMatche(id : number){
        return this.httpClient.delete<any>(this.apiUrl + "/" +id);
        }
        ModifierMatche(p : Match){
          return this.httpClient.put<any>(this.apiUrl, p);
          }
          AjouterMatche(p : Match){
            return this.httpClient.post<any>(this.apiUrl, p);
            }

}
