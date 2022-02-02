import Carro from "./Carro";
import Moto from "./Motos";
import Concessionaria from "./Concessionaria"



let moto = new Moto()
moto.acelerar()
moto.acelerar()

let carro = new Carro('veloster',3)
carro.acelerar()

let concessionaria = new Concessionaria('',[])

console.log(moto)
console.log(carro)
console.log(concessionaria.forncerHorariosDeFuncionamento())