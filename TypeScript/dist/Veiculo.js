"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    para() {
        this.velocidade = 0;
    }
    velocidadeAtua() {
        return this.velocidade;
    }
}
exports.default = Veiculo;
