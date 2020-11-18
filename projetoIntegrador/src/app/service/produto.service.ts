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
    return this.http.get('https://findworkers1.herokuapp.com/produtos')
  }
  getByIdProduto(id:number){
    return this.http.get(`https://findworkers1.herokuapp.com/produtos/id/${id}`, this.token)
  }
  postProduto(produto: Produto)
  {
    return this.http.post('https://findworkers1.herokuapp.com/produtos',produto, this.token)
  }
  putProduto(produto: Produto){
    return this.http.put('https://findworkers1.herokuapp.com/produtos',produto, this.token)
  }
  deleteProduto(id:number){
    return this.http.delete(`https://findworkers1.herokuapp.com/produtos/id/${id}`, this.token)
  }

}
