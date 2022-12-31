function valores(){

let numeros = [5,5,5]

let soma1 = 0;
let soma3 = 0;
let soma5 = 0;


for (let i = 0; i<numeros.length; i++) {
    
 if (numeros[i] % 2 ==0) {
    soma1++
   }
  }

for (let i = 0; i<numeros.length; i++) {
    
  if(numeros[i] % 2 != 0 && numeros[i] !=5) {
   soma3+=3
  }
}


for (let   i = 0; i<numeros.length; i++) {
    
  if(numeros[i] == 5 ){
    soma5+=5
  }
}

let result =  soma3 + soma5+ soma1;

document.write(result)


}
valores()
