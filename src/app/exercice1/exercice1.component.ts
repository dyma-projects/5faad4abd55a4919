import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  /* ATTRIBUT */
  public att: string;
  public sub: string;
  public value: string;
  public place: string;
  public lien: string;
  public label: string;
  public titre: string = 'Exercice1'; //un essaie de cette manière, obligation de mettre dans le constructeur ?
  

  constructor() {
    this.att = 'mail';
    this.sub = 'submit';
    this.place = 'Exercice 1';
    this.value = 'Je clic sur ce bouton pour valider l\'exercice 1, en plus ca fait un grand bouton';
    this.lien = 'https://google.fr';
    this.label = 'je fais un essaie supplémentaire pour l\'exercice 1 (promis c\'est le dernier)';
   }

  /* ÉVÉNEMENT */
   public color: string = '1px solid blue';
   public back: string = 'white';
   public essaie: string = "";
   public fond: string = 'white';
   
   public changeBorder(border: string, background: string): void{
     this.color = border;
     this.back = background;
   }
 
   public foc(fond: string): void {
     this.fond = fond;
   }

   /* DOUBLE BINDING */
  public couleur: string = '1px solid blue';
  public exemple: string = "test";
  public remplir: string = '';
  public show: string = '';
  public popo: string = "green";
  public nono: string = 'red'; //pourquoi le texte n'est pas rouge ? est-ce dû à la balise ?

  ngOnInit(): void {
  }

}
