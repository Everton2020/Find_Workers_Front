import { Categoria } from './categoria'

export class Produto{
    public id: number
    public descricao: string
    public nome: string
    public preco: number
    public situacao: boolean
    public categoria: Categoria
    
}