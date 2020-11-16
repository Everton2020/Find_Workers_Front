import { Component, OnInit } from '@angular/core';

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key = 'preco'
  reverse = false
  
  listaProdutos : Produto []
  faFacebook = faFacebook 
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub

  constructor(
    private produtoService: ProdutoService
    
  ) { }

  ngOnInit(){
    this.findAllProdutos()
  }

  findAllProdutos()
  {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
    this.listaProdutos = resp
    })
  }
}
