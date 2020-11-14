import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos()
  {
    return this.http.get('http://localhost:8080/produtos', this.token)
  }
  getByIdProduto(id:number){
    return this.http.get(`http://localhost:8080/produtos/id/${id}`, this.token)
  }
  postProduto(produto: Produto)
  {
    return this.http.post('http://localhost:8080/produtos',produto, this.token)
  }
  putProduto(produto: Produto){
    return this.http.put('http://localhost:8080/produtos',produto, this.token)
  }
  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8080/produtos/id/${id}`, this.token)
  }

}