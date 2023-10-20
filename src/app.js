const journal = {
    Anna : 4,
    Ivan : 3,
    Elena : 5,
    Arseniy : 5,
}


function getScore(){
    let score = 0;
    for (let key in journal){
       score += journal[key];
    }
    return score;
}

console.log(getScore(journal));

