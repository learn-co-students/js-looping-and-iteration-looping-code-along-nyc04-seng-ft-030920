function writeCards(attending_guest, event) {
let cards = []
for (let i = 0; i < attending_guest.length; i++) {
    cards.push(`Thank you, ${attending_guest[i]}, for the wonderful ${event} gift!`)
}
    return cards
}

function countDown(timer) {
    while (timer > 0) { 
        console.log(timer)
        timer -= 1
    }
    console.log(timer)
}