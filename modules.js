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