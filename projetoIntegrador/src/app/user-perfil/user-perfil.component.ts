import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  

  nome: string = localStorage.getItem('nome')
  imagem: string = localStorage.getItem('imagem')
  
  constructor() { }

  ngOnInit(){
   
  }

}
