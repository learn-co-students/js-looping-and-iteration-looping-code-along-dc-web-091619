// Code your solutions in this file

const names = ['Ada', 'Brenden', 'Ali'];

function writeCards(arrayNames, eventName) {
    let messages = []
    for (let i = 0; i < arrayNames.length; i++) {
      messages.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`);
    }

    return messages;
}

function countDown(number) {
    let i = number 
    while ( number > 0 ){
      console.log(number)
      number --;
    }
  console.log(number)
}