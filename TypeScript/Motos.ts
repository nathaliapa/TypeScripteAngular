import Veiculo from "./Veiculo";

class Moto extends Veiculo{

    // sobre escrita de moetodos
    public acelerar(): void{

        this.velocidade = this.velocidade + 20
    }


}

export default Moto    // exportar modeluno 