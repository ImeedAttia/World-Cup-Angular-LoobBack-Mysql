export class Client {
   id!: number;

    nom : string;
    prenom : string;
  pays : string;
  email : string;
  password : string;
  tel:string;
  constructor(nom : string,
    prenom : string,
    pays : string,
    email : string,
    password : string,tel : string) {
   
      this.nom = nom;
    this.prenom = prenom;
    this.pays= pays;
    this.email = email;
    this.password =password;
    this.tel=tel;
}

}