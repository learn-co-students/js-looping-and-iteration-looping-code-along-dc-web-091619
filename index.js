const array = [ 'Lisa', 'Kaitlin', 'Jan' ];
const adjective = 'surprise';

function writeCards(array, adjective) {
  let thankYous = [];

  for (let i = 0; i < array.length; i++) {
    thankYous.push(`Thank you, ${array[i]}, for the wonderful ${adjective} gift!`);
  }

  return thankYous;
}

writeCards(array, adjective);

function countDown(num) {
  i = num;

  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);