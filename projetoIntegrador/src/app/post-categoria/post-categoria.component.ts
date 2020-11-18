import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {

  user: User = new User()

  nome: string = localStorage.getItem('nome')
  imagem: string = localStorage.getItem('imagem')
  usuario: string = localStorage.getItem('usuario')

  categoria:Categoria = new Categoria()
  listaCategorias: Categoria[]
  
  constructor(
    private alerta: AlertasService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllCategorias()
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
  cadastrar(){
    if(this.categoria.nome == null){
      this.alerta.showAlertDanger(' Preencha o campo de nome da categoria corretamente')
    }else{
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria = resp
        this.router.navigate(['/perfil'])
        this.alerta.showAlertSuccess('Categoria cadastrada com sucesso')
      })
    }
  }
}
