import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastre-produto',
  templateUrl: './cadastre-produto.component.html',
  styleUrls: ['./cadastre-produto.component.css']
})
export class CadastreProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllProdutos()
  {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }
  findAllCategorias()
  {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
    this.listaCategorias = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp;
    })
  }
}
