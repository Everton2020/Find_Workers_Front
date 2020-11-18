import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  user: User = new User()

  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  nome: string = localStorage.getItem('nome')
  imagem: string = localStorage.getItem('imagem')
  usuario: string = localStorage.getItem('usuario')

  constructor(
    private categoriaService:CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)
    
    this.findAllCategorias()
  }
  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }
  salvar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.router.navigate(['/perfil'])
      this.alerta.showAlertSuccess('Produto alterado com sucesso!')
    },err=>{
      if(err.status == '500'){
        this.alerta.showAlertDanger('Preencha todos os campos corretamente antes de alterar!')
      }
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
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria)=>{
      this.categoria = resp;
    })
  }
}
