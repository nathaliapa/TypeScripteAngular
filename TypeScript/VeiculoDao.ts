import {DaoInterface} from "./DaoInterface"
import Veiculo from "./Veiculo"

export class VeiculoDao implements DaoInterface{

      nomeTabela: string = 'tb_veiculo'

      inserir(object: Veiculo): boolean {
           console.log('logica de insert') 
            return true
      }

      atualizar(object: Veiculo): boolean{
            console.log('logica de update') 
            return true
      }

      remover(id: number): Veiculo{
            console.log('logica de remove') 
            return new Veiculo()
      }

      selecionar(id: number): Veiculo{
            console.log('logica de select') 
            return new Veiculo()
      }

      selecionarTodos(): [any] {
            console.log('logica get all') 
            return [new Veiculo()]
      }

}