function valores(){
  let msg1 = document.getElementById("msg1").value;
  let deslocamento = parseInt(document.getElementById("deslocamento").value);
  cipherEncrypt(msg1, deslocamento);
 }
 
 function cipherEncrypt (msg1, deslocamento){
  let arrNumbers = [];
  let message = "";
 
   for (let i = 0; i < msg1.length; i++){
    arrNumbers.push(msg1[i].charCodeAt())
   
    if (arrNumbers[i] >= 65 && arrNumbers[i] <= 90) { 
       let calculate = ((arrNumbers[i] - 65 + (deslocamento % 26) + 26) % 26) + 65;
       message = message + String.fromCharCode(calculate);
     }
   
 
    else if (arrNumbers[i] >= 97 && arrNumbers[i] <= 122) {
       let calculate2 = ((arrNumbers[i] - 97 + (deslocamento % 26) + 26) % 26) + 97;
       message = message + String.fromCharCode(calculate2);
     }
 
    else {message = message + String.fromCharCode(arrNumbers[i])
     } 
   } 
    document.getElementById("tela-inicial").className="hide";
    document.getElementById("tela-resultado").className="show";
    document.getElementById("message").innerHTML= message;
    document.getElementById("msg1").value=" ";
   document.getElementById("deslocamento").value= " ";
    return message;
    
  
      
 }
 
 function valores2(){
  msg1 = document.getElementById("msg1").value;
  deslocamento = parseInt(document.getElementById("deslocamento").value);
  cipherDecrypt(msg1, deslocamento);
 }
 
 function cipherDecrypt (msg1, deslocamento){
  let array = [];
  let message = "";
 
   for (let t = 0; t < msg1.length; t++){
    array.push(msg1[t].charCodeAt())
   
    if (array[t] >= 65 && array[t] <= 90) { 
       let conta = ((array[t] - 65 - (deslocamento % 26) + 26) % 26) + 65;
       message = message + String.fromCharCode(conta);
     }
   
 
    else if (array[t] >= 97 && array[t] <= 122) {
       let conta2 = ((array[t] - 97 - (deslocamento % 26) + 26) % 26) + 97;
       message = message + String.fromCharCode(conta2);
     }
 
    else {message = message + String.fromCharCode(array[t])
     }
   }
   document.getElementById("tela-inicial").className="hide";
   document.getElementById("tela-resultado").className="show";
   document.getElementById("message").innerHTML= message;
   document.getElementById("msg1").value=" ";
   document.getElementById("deslocamento").value= " ";
   return message;
  }
 
 
 
 function comeBack(){ 
  document.getElementById("tela-inicial").className="show";
  document.getElementById("tela-resultado").className="hide";
 }
    