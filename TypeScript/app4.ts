//import {ConcessionariaDao} from "./ConcessionariaDao"
import Concessioaria from './Concessionaria'
import { Dao } from './Dao'
//import { PessoaDao } from "./PessoaDao"
import Pessoa from "./Pessoa"
import Veiculo from "./Veiculo"
//import { VeiculoDao } from "./VeiculoDao"

//let dao:ConcessionariaDao = new ConcessionariaDao()
let concessioaria = new Concessioaria('',[])

//dao.inserir(concessioaria)

//let dao2: PessoaDao = new PessoaDao()
let pessoa:Pessoa = new Pessoa('','')

//dao2.atualizar(pessoa)

//let dao3: VeiculoDao = new VeiculoDao()
//let veiculo:Veiculo = new Veiculo()

//dao3.selecionar(1)
let dao6: Dao<Veiculo> = new Dao<Veiculo>()
let dao5: Dao<Pessoa> = new Dao<Pessoa>()
let dao4: Dao<Concessioaria> = new Dao<Concessioaria>()
dao4.inserir(concessioaria)
dao5.remover(5)
dao6.selecionarTodos()

