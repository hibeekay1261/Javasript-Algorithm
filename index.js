/* QUESTION ONE
 Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. */

//convertFahrToCelsius algorithm

function convertFahrToCelsius(Fahr) {
	let F = Fahr;
	let Celsius = (F - 32) * 5 / 9 ;

	if (isNaN(F) && !Array.isArray(F)) {
		return `${JSON.stringify(F)} is not a valid number but a/an ${typeof(F)}`;
	}
	else if (Array.isArray(F)) {
	  return `${JSON.stringify(F)} is not a valid number but a/an ${"Array"}`;
	}
	else {
		return Celsius.toFixed(4);
	}
	
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));
console.log(convertFahrToCelsius("sre"));






/* QUESTION TWO
Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.
 */


function checkYuGiOh(n){
    
let dArray = [];    
    
for(let i=1; i<= n; i++){
        

switch (true) {

  case  i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
    dArray.push("Yu-Gi-Oh");
    break;
    
  case i % 2 === 0 && i % 5 === 0:
    dArray.push("Yu-Oh");
    break;
    
  case i % 2 === 0 && i % 3 === 0:
    dArray.push("Yu-Gi");
    break;
    
  case i % 5 === 0:
    dArray.push("Oh");
    break;
    
  case i % 3 === 0:
    dArray.push("Gi");
    break;
    
  case i % 2 === 0:
    dArray.push("Yu");
    break;
    
  default:
    dArray.push(i);
}

} 
    
if(Number(n)){     
  return dArray;
  } else{
      return `invalid parameter: "fizzbuzz is meh"`;
    }
    
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh("fizzbuzz is meh"));

