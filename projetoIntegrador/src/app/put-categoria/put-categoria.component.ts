import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id:number = this.route.snapshot.params["id"];
    this.findByCategoria(id);
  }

  findByCategoria(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria = resp;
    })
  }
  salvar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
      this.router.navigate(['/cadastro-categoria'])
      this.alerta.showAlertSuccess('Categoria atualizada com sucesso!')
    })
  }

}
