export class Equipe {
    id!: number;

    nom_equipe : string;
    Entreneur : string;
    pathimg : string;
 
  constructor(
    nom_equipe : string,
    Entreneur : string,
    pathimg : string,
   ) {
   
      this.nom_equipe = nom_equipe;
    this.Entreneur = Entreneur;
    
    this.pathimg = pathimg;
    
}
}
