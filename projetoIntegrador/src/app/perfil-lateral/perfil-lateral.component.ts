import { Component, OnInit } from '@angular/core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  
  nome: string

  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin  = faLinkedin
  constructor() { }

  ngOnInit(){
    this.nome = 'Everton Souza Silva'
  }

}
