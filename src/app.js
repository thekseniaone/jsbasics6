/**
 * Объект с набором имен студентов и оценок
 * @type {{ Anna: number; Ivan: number; Elena: number; Arseniy: number; }}
 */

const journal = {
    Anna: 4,
    Ivan: 3,
    Elena: 5,
    Arseniy: 5,
}


/**
 * Функция с подсчетом оценок
 * @param {*} journal
 * @returns {number}
 */

function getScore(journal) {
    let score = 0;
    for (let key in journal) {
        score += journal[key];
    }
    return score;
}

console.log(getScore(journal));

