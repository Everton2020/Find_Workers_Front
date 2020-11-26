import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient ) { }

  token = {
    headers: new HttpHeaders().set('Authorization',localStorage.getItem('token'))//environment.token)
  }

  getAllCategorias()
  {
    return this.http.get('https://findworkersbrazil.herokuapp.com/categorias')
  }
  getByIdCategoria(id: number)
  {
    return this.http.get(`https://findworkersbrazil.herokuapp.com/categorias/id/${id}`, this.token)
  }

  postCategoria(categoria: Categoria){
    return this.http.post('https://findworkersbrazil.herokuapp.com/categorias', categoria, this.token)
  }
  putCategoria(categoria: Categoria){
    return this.http.put('https://findworkersbrazil.herokuapp.com/categorias', categoria, this.token)
  }
  deleteCategoria(id: number)
  {
    return this.http.delete(`https://findworkersbrazil.herokuapp.com/categorias/id/${id}`, this.token)
  }
  
}
