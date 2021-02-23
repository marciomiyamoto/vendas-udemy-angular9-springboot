import { Component } from '@angular/core'

@Component({
    selector:'hello',
    templateUrl:'./hello.component.html'
})
export class HelloComponent {

    nome: string;
    clientes: Cliente[];

    constructor() {
        this.nome = "Marcio";

        let fulano = new Cliente('Fulano', 32);
        let cicrano = new Cliente('Cicrano', 26);
        let outro = new Cliente('outro', 52)

        this.clientes = [ fulano, cicrano, outro ];
    }
}

class Cliente {

    constructor(
        private nome: string,
        private idade: number
    ) {}
}