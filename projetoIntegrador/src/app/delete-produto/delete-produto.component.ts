import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  user: User = new User()

  nome: string = localStorage.getItem('nome')
  imagem: string = localStorage.getItem('imagem')
  usuario: string = localStorage.getItem('usuario')


  constructor(
    private ProdutoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdProduto(id)

  }
  findByIdProduto(id:number){
    this.ProdutoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
    })
  }
  btnSim(){
    this.ProdutoService.deleteProduto(this.produto.id).subscribe(()=>{
      this.router.navigate(['/perfil'])
      this.alerta.showAlertSuccess('Produto apagado com sucesso!!')
    })
  }
  btnNao(){
    this.router.navigate(['/perfil'])
  }
}
