import { Conta } from './Conta';


export function main() {

    const conta: Conta = new Conta(1, 123, 1, "João da Silva", 1000);
    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();
    conta.depositar(1000);
    conta.visualizar();
    
}

main();