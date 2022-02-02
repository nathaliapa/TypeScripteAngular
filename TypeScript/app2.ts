
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/* --- criar carro ----     */

let carroA = new Carro('dodge',4)
let carroB = new Carro('veloster',3)
let carroc = new Carro('cobalt',4)

/*------- montar lista de carro da concessionaria -------*/

let listaDeCarros: Array<Carro> = [carroA,carroB,carroc]
//let listaDeCarros: Carro[] = [carroA,carroB,carroc]
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/*---- exibir a lista de carro-----*/

//console.log(concessionaria.mostrarLitaDeCarro())


/*---- comprar o carro --- */
let cliente = new Pessoa('nathalia','veloster')

//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarLitaDeCarro().map((carro:Carro) =>{
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        // comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

