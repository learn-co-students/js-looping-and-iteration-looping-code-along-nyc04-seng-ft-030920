// Code your solutions in this file
function writeCards(names , event) {
  var array = [] 
  for(var i = 0; i < names.length; i++){
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return array
}

function countDown(number) {
   let  i = 0;
  while(i <= number) {
      
    console.log(number)
    number--


  }
     

}