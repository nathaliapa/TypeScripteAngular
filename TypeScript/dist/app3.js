"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Motos_1 = __importDefault(require("./Motos"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let moto = new Motos_1.default();
moto.acelerar();
moto.acelerar();
let carro = new Carro_1.default('veloster', 3);
carro.acelerar();
let concessionaria = new Concessionaria_1.default('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.forncerHorariosDeFuncionamento());
