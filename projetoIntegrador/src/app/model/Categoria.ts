import { Produto } from './produto'

export class Categoria{
    public id: number
    public nomecateg: string
    public setor: string
    public produto: Produto[]
}