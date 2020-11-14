import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'preco'
  reverse = false

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria() //<--- erro pode estar aqui
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService, 
    private categoriaService: CategoriaService) { }

  ngOnInit(){
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

    if (this.produto.nome == null || this.produto.descricao == null ||  this.produto.preco == null|| this.produto.categoria == null)
    {
     alert('Preencha todos os campos corretamente')
    }else
    {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
        this.produto = resp;
        this.produto = new Produto()
        alert('Produto cadastrado com sucesso')
        this.findAllProdutos()
      })
    }
  }
}
