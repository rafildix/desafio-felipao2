function calcNivel (vitorias, derrotas){
    let saldo = vitorias - derrotas
}

let saldo, vitorias = 50, derrotas = 60, nivel 
saldo = vitorias - derrotas

if (vitorias < 10){
    nivel = "Ferro"
} else if (vitorias < 20){
    nivel = "Bronze"
} else if (vitorias < 50){
    nivel = "Prata"
} else if (vitorias < 80){
    nivel = "Ouro"
} else if (vitorias < 90){
    nivel = "Diamante"
} else if (vitorias < 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log("O Herói tem " + vitorias + " e " + derrotas + " derrotas ")
console.log("Totalizando um saldo de " + saldo + ". O Heróio está no nível " + nivel) 