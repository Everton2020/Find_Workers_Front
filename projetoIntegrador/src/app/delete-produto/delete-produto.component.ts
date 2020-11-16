import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto
  constructor(
    private ProdutoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
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
      this.router.navigate(['/feed'])
      alert('Produto apagado com sucesso!!')
    })
  }
  btnNao(){
    this.router.navigate(['/feed'])
  }
}
