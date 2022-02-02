"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- criar carro ----     */
let carroA = new Carro_1.default('dodge', 4);
let carroB = new Carro_1.default('veloster', 3);
let carroc = new Carro_1.default('cobalt', 4);
/*------- montar lista de carro da concessionaria -------*/
let listaDeCarros = [carroA, carroB, carroc];
//let listaDeCarros: Carro[] = [carroA,carroB,carroc]
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/*---- exibir a lista de carro-----*/
//console.log(concessionaria.mostrarLitaDeCarro())
/*---- comprar o carro --- */
let cliente = new Pessoa_1.default('nathalia', 'veloster');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarLitaDeCarro().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
