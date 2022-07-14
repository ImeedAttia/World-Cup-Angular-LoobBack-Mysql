export class Match {
    public id!:number;
    public Equipe1:string;
    public Equipe2:string;
    public Stade:string;
    public Arbitre:string;
    public pathimg :string;
    constructor(   Equipe1:string,
         Equipe2:string,
         Stade:string,
         Arbitre:string,
         pathimg :string){
             this.Equipe1=Equipe1;
             this.Equipe2=Equipe2;
             this.Arbitre=Arbitre;
             this.Stade=Stade;
             this.pathimg=pathimg;
         }
}
