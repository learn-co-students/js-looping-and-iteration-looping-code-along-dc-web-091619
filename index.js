
function writeCards( arr, event ) {
  let thankYouCards = []
  for ( let i = 0; i < arr.length; i++ ) {
    thankYouCards.push( `Thank you, ${arr[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown( num ) {
  while ( num > 0 ) {
    console.log( num );
    num -= 1;
  }
  console.log( num );
}