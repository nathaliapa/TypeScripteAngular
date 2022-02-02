import Carro  from "./Carro"
import { ConcessionariaInteface } from "./ConcessionariaInterfece"

export default class Concessionaria implements ConcessionariaInteface{

    private endereco: string
    private listaDeCarros: /*any*/ Array<Carro> 

    constructor(endereco: string, listaDeCarros:Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{

        return this.endereco

    }

    public mostrarLitaDeCarro(): Array<Carro> /*any*/{
        return this.listaDeCarros
    }

    public forncerHorariosDeFuncionamento(): string{
        return "De segunda a sexta das 08:00 as 18:00 e sabado das 08:00 as 12:00"
    }
}