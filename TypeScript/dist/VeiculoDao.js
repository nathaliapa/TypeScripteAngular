"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoDao = void 0;
const Veiculo_1 = __importDefault(require("./Veiculo"));
class VeiculoDao {
    constructor() {
        this.nomeTabela = 'tb_veiculo';
    }
    inserir(object) {
        console.log('logica de insert');
        return true;
    }
    atualizar(object) {
        console.log('logica de update');
        return true;
    }
    remover(id) {
        console.log('logica de remove');
        return new Veiculo_1.default();
    }
    selecionar(id) {
        console.log('logica de select');
        return new Veiculo_1.default();
    }
    selecionarTodos() {
        console.log('logica get all');
        return [new Veiculo_1.default()];
    }
}
exports.VeiculoDao = VeiculoDao;
