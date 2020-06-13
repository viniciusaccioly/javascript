var dado = {

    lados: 6,

    jogadas: 0,

    rolar(){

        var numero = this.lados * Math.random()

        var valor = Math.ceil(numero)

        this.jogadas = this.jogadas + valor

        return valor

    },

    totalJogadas(){

        return "Soma das jogadas = " + this.jogadas

    }

}



var jogada1 = dado.rolar()

console.log(jogada1)

var jogada2 = dado.rolar()

console.log(jogada2)

dado.totalJogadas()