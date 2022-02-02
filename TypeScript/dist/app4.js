"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from "./ConcessionariaDao"
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Dao_1 = require("./Dao");
//import { PessoaDao } from "./PessoaDao"
const Pessoa_1 = __importDefault(require("./Pessoa"));
//import { VeiculoDao } from "./VeiculoDao"
//let dao:ConcessionariaDao = new ConcessionariaDao()
let concessioaria = new Concessionaria_1.default('', []);
//dao.inserir(concessioaria)
//let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa_1.default('', '');
//dao2.atualizar(pessoa)
//let dao3: VeiculoDao = new VeiculoDao()
//let veiculo:Veiculo = new Veiculo()
//dao3.selecionar(1)
let dao6 = new Dao_1.Dao();
let dao5 = new Dao_1.Dao();
let dao4 = new Dao_1.Dao();
dao4.inserir(concessioaria);
dao5.remover(5);
dao6.selecionarTodos();
