// Code your solutions in this file
function writeCards(arrayi, eventi){
    let cardss = []
    for (let i = 0; i < arrayi.length; i++) {
        cardss.push( `Thank you, ${arrayi[i]}, for the wonderful ${eventi} gift!` )
    }
    return cardss
}

function countDown(number){
    while (number > 0) {
        console.log(number)
        number -= 1
    }
    console.log(number)
}