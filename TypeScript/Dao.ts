import { DaoInterfaces } from "./DaoInterfaces";

export class Dao<T> implements DaoInterfaces<T>{

      omeTabela: string = ''

      inserir(object: T): boolean {
           console.log('logica de insert') 
            return true
      }

      atualizar(object: T): boolean{
            console.log('logica de update') 
            return true
      }

      remover(id: number): T{
            console.log('logica de remove') 
            return Object ()
      }

      selecionar(id: number): T{
            console.log('logica de select') 
             return Object ()
      }

      selecionarTodos(): [T] {
            console.log('lógica getAll')
            return [Object()]
      }

}