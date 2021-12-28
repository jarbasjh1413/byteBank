import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",1115554444);
const cliente2 = new Cliente("Alice",88877744455);

const contaCorreenteCliente1 = new ContaCorrente(cliente1,1001);
const contaCorreenteCliente2 = new ContaCorrente(cliente2,1001)

contaCorreenteCliente2.depositar(200)

let valorTransferencia=200 // armazenando o valor da tranferência
contaCorreenteCliente2.transferir(valorTransferencia,contaCorreenteCliente1)

console.log(contaCorreenteCliente1,contaCorreenteCliente2)
