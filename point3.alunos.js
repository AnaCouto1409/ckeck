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
