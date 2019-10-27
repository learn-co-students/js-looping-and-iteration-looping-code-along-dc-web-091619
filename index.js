// Code your solutions in this file
function writeCards(array,eventname){
    let arr = []
    for(let i=0;i<array.length;i++){
        arr.push(`Thank you, ${array[i]}, for the wonderful ${eventname} gift!`)
    }
    return arr
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--
    }
}
