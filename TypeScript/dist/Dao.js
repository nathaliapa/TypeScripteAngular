"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.omeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        console.log('logica de select');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [Object()];
    }
}
exports.Dao = Dao;
