//passo 4 e passo 5 e passo 6 com retorno de objeto
let cursos = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 6,
    faltasMaxima: 3,
    listaEstudantes: listaEstudantes,
    alunoNovo: function (aluno_, faltas_, notas_) {
        this.listaEstudantes.push(new estudantes.AddAluno(aluno_, faltas_, notas_))
    },
    aprovacao: function (aluno_) {
        if ((aluno_.calcularMedia() >= this.notaAprovacao) && (aluno_.faltas < this.faltasMaxima)) {
            return true;
        } else if ((aluno_.faltas === this.faltasMaxima) && (aluno_.calcularMedia() > this.notaAprovacao * 1.1)) {
            return true;
        } else {
            return false;
        }
    },
        resultados:function(){
            let lista =[];
            for(let estudante of this.listaEstudantes) {
                lista.push(this.aprovacao(estudante));
            }
            return lista;
        }
    };
let listaTrueFalse = cursos.resultados();
console.log(listaTrueFalse);

module.exports = cursos;