import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("João", 12345678912); //João//cliente1.rg = 121234565;
const ContaCorrenteJoao = new ContaCorrente(cliente1, 1001); //João

const cliente2 = new Cliente("Maria", 9898798765); //Maria //cliente2.rg = 989876549;
const ContaCorrenteMaria = new ContaCorrente(cliente2, 1001); //Maria

const cliente3 = new Cliente("Alice", 88822233309);
const ContaCorrenteAlice = new ContaCorrente(cliente3, 102); //Alice


ContaCorrenteJoao.depositar(200);
const saque = ContaCorrenteJoao.sacar(50);
console.log("João fez o saque de " + saque);
console.log("Saldo do João: " + ContaCorrenteJoao._saldo);
ContaCorrenteJoao.transferir(20, ContaCorrenteMaria);

console.log("Saldo João após transferência: " + ContaCorrenteJoao._saldo);
console.log("Saldo da Maria: " + ContaCorrenteMaria._saldo);

ContaCorrenteJoao.transferir(10, ContaCorrenteAlice);

console.log(ContaCorrenteAlice.saldo);

console.log("Total de contas criadas: " + ContaCorrente.numeroDeContas);
