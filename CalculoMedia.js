//Implementação dos elementos básicos do Javascript
//Disciplina: Linguagens de Script para Web
//Autor: Rosele Fernandes Silva
//02/09/2022
//Objetivo: Desenvolver uma aplicação para cálculo de aproveitamento de rendimento escolar, usando os conhecimentos de linguagem de programação em Javascript e uso de variaveis, constantes e funções.

console.log("====== Cálculo da Média Semestral ======")

const nota1 = 80.0
const nota2 = 70.0
const nota3 = 65.0
const nota4 = 78.0

const mediaAluno = calculaMedia(nota1, nota2, nota3, nota4)

console.log(`A media do aluno foi de ${mediaAluno}`)

function calculaMedia(nota1, nota2, nota3, nota4) {
    const media = (nota1 * 0.1) + (nota2 * 0.2) + (nota3 * 0.3) + (nota4 * 0.4)
    return media
}