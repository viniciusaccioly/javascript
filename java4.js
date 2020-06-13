calcularMedia() {
	var total = 0
	for (var i =0; i < this.notas.length; i++){
		total = total + this.notas[i]
	}

}



antonio.jr@outlok.com
sophiarscastro@gmail.com

var Aluno = require("./aluno.js")
var jose = new Aluno("Jose", 12)
jose.adicionarNota(4)
jose.adicionarNota(5)
console.log(jose)
var aprovado = jose.aprovado()
console.log(jose.nome + " foi aprovado? " + aprovado)
var letra = jose.calcularLetra()
console.log(letra)

var sophia = new Aluno("Sophia", 12)
sophia.adicionarNota(10)
sophia.adicionarNota(09)
console.log(sophia)
var aprovado = sophia.aprovado()
console.log(sophia.nome + " foi aprovado? " + aprovado)
var letra = sophia.calcularLetra()
console.log(letra)

