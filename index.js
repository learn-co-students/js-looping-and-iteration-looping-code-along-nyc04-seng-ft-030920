// Code your solutions in this file
function writeCards(array_of_names, event_name) {
    let card = []
    for (let i = 0; i < array_of_names.length; i++) {
        card.push(`Thank you, ${array_of_names[i]}, for the wonderful ${event_name} gift!`)
    }
    return card
}

function countDown(pos_integer) {
    while (pos_integer > 0 ) {
        console.log(pos_integer)
        pos_integer -= 1
    }
    console.log(pos_integer)
}