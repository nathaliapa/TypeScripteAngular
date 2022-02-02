export default class Veiculo{

    protected modelo!: string  // o protected permite a alteração nas classes filhas
    protected velocidade: number = 0

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }

    public para(): void{
        this.velocidade = 0
    }

    public velocidadeAtua(): number{
        return this.velocidade
    }
}