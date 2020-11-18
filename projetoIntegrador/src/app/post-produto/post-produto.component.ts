import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria() 
  listaCategorias: Categoria[]
  idCategoria: number

  user: User = new User()

  nome: string = localStorage.getItem('nome')
  imagem: string = localStorage.getItem('imagem')
  usuario: string = localStorage.getItem('usuario')

  constructor(
    private alerta: AlertasService,
    private produtoService: ProdutoService, 
    private categoriaService: CategoriaService,
    private router:Router  
    ) { }

  ngOnInit(){
    let token = localStorage.getItem('token')//environment.token

    if(token == null){
      this.router.navigate(['/login'])
      this.alerta.showAlertDanger('Faça o login antes de entrar no feed...')
    }
    
    
    window.scroll(0, 0)
    this.findAllCategorias()
    this.findAllProdutos()

    
  }
  
  findAllProdutos()
  {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
    this.listaProdutos = resp
    })
  }
  findAllCategorias()
  {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }
  findByIdCategoria()
  {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp;
    })
  }
  publicar()
  {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.descricao == null || this.produto.categoria == null)
    {
     this.alerta.showAlertDanger('Preencha todos os campos corretamente')
    }else
    {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
        this.produto = resp;
        this.produto = new Produto()
        this.alerta.showAlertSuccess('Produto cadastrado com sucesso')
        this.findAllProdutos()
        this.router.navigate(['/perfil'])
      })
    }
  }
}
