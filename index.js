function writeCards(names) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return arr
}

function countDown(number) {
    let i = number;
    while (0 <= i <= number) {
        console.log(number--)
    }
    console.log(0)
}