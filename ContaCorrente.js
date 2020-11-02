import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; //https://github.com/tc39/proposal-class-fields#private-fields

    //Métodos Assessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){

        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    //Métodos
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }  

    depositar(valor){ //usando early return
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}