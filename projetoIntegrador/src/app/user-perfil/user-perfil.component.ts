import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  nome: string = "Everton";
  
  constructor() { }

  ngOnInit(){
   this.nome= 'Everton Souza Silva'
  }

}
