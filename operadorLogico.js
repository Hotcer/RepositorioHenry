function mayorYMenor(num) {
  if (num > 5 && num < 10) console.log(true);
  else console.log(false);
}

mayorYMenor(6);


function operadorOr(str){
  if (str === "Henry" || str.length<2 ) console.log(true);
  else console.log(false);
};

operadorOr("Henry") //Es true porque si es igual
operadorOr("JavaScript") //Es false porque no es "Henry" y su longitud mayor a 2
operadorOr("A") //Es true porque una de las condiciones se cumple

function mayorYMenorPar(num) {
  if(num > 5 && num < 10 && num % 2 === 0) console.log(true);
  else console.log(false);
};
mayorYMenorPar(7);
mayorYMenorPar(8);


