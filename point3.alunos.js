export default class CreateAluno {
    constructor(name, absent, notes) {
        this.name = name,
        this.absent = absent,
        this.notes = notes;

        this.finalMedia = function () {
            let total = 0;
            for (let nota of this.notes) {
                total += nota;
            }
            return total /= this.notes.length;

        };

        this.countAbsents = function () {
            return this.absent += 1;
        };
    }
}


const aluno1 = new CreateAluno("Juan", 5, [10, 2, 9, 8]);
const aluno2 = new CreateAluno("Ana", 4, [10, 10, 10, 10]);
const aluno3 = new CreateAluno("Pati", 3, [10, 6, 9, 7]);
const aluno4 = new CreateAluno("Lucas", 2, [1, 2, 5, 8]);
const aluno5 = new CreateAluno("Dom", 1, [10, 7, 9, 8]);

export const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
// outra parte do codigo