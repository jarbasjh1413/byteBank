import { Cliente } from "./Cliente.js";

 export class ContaCorrente {
    static numeroDeContas=0
    agencia;
    _cliente;
    _saldo = 0;
      
     
    
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
        this._cliente=novoCliente
     }

   get cliente(){
       return this._cliente 
   }

    get saldo(){
        return this._saldo
    }

    get agencia(){
        return this.agencia
    }




    constructor(cliente, agencia){

        this.cliente=cliente
        this.agencia=agencia
        ContaCorrente.numeroDeContas++

    }

    sacar(valorSacado) {

        if (this._saldo < valorSacado) return
        this._saldo -= valorSacado
        return valorSacado

    }

    depositar(valorDepositado) {
        if (valorDepositado <= 0) return
        this._saldo += valorDepositado
        return valorDepositado

    }
            // 100 // contacliente2
    transferir(valor, conta){
        const valorTransferencia=this.sacar(valor)   
        conta.depositar(valorTransferencia)
        return valor
    }


}