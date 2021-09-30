import createAluno from './modules/alunos.js';
import {alunos} from './modules/alunos.js';


class CreateCursos {
    constructor(name, mediaFinal, faltasLimits) {
        this.name = name,
            this.mediaFinal = mediaFinal,
            this.faltasLimits = faltasLimits,
            this.listaDeAlunos = alunos

        this.createAluno = function (estudades) {
            this.listaDeAlunos.push(estudades);
        };

        this.aprovacao = function (estudante) {
            if (estudante.finalMedia() >= this.mediaFinal && estudante.absent < this.faltasLimits) {
                return `Aprovado`;
            } else if (estudante.absent == this.faltasLimits) {
                let porcentagem = 10 * this.mediaFinal / 100;
                porcentagem += this.mediaFinal
                if (estudante.finalMedia() > porcentagem) {
                    return `Aprovado`;
                }
            } else {
                return `Reprovado`;
            }
        };

        this.listaDeAprovacao = function () {
            let resultadoFinal;
            let listaDeAprovacao = [];
            for (let aluno of this.listaDeAlunos) {
                resultadoFinal = [aluno.name, this.aprovacao(aluno)]
                listaDeAprovacao.push(resultadoFinal);
            }
            return listaDeAprovacao;
        }
    }
}

const java = new CreateCursos('Java', 7, 3);

function MeuObjeto(pro,pro2,pro3){
    this.pro1 =pro1_;
    this.pro2 =pro2_;
    this.numeros =pro3_;
    this.func1 =function(){
        this.func2 =function(){
            this.numeros[0] = 1000;
            for(let numero of this.numeros){
                console.log(numero)
            }
        }
    }
}


//PASSO 2 

//banco de dados
const aluno1 = new CreateAluno("Juan", 5, [10, 2, 9, 8]);
const aluno2 = new CreateAluno("Ana", 4, [10, 10, 10, 10]);
const aluno3 = new CreateAluno("Pati", 3, [10, 6, 9, 7]);
const aluno4 = new CreateAluno("Lucas", 2, [1, 2, 5, 8]);
const aluno5 = new CreateAluno("Dom", 1, [10, 7, 9, 8]);

let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
console.log(aluno1.calcularMedia())

export const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

//passo 3

let cursos = {
    nomeCurso:"Programação Imperativa",
    notaAprovação:6,
    faltasMaximas:2,
    listaEstudantes:listaEstudantes
};
console.log(cursos);
module.exports = cursos;
let listaEstudantes = require("./alunos");
let AddAluno = require (/.alunos);

