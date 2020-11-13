import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {

  categoria: Categoria= new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router:Router
    ) { }

  ngOnInit(){
    this.findAllCategorias( )
  }
  findAllCategorias()
  {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
    this.listaCategorias = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria)=>{
      this.categoria = resp;
    })
}
cadastrar(){
  if(this.categoria.nomecateg == null){
    alert('Preecha o campo categoria corretamente')
  }else{
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria=resp
      this.router.navigate(['/cadastre-produto'])
      alert('Categoria Cadastrada com Sucesso')
    })
  }
}
}
