
function cipherEncrypt(textInput, offset){
  let arrNumbers = [];
  let message = "";
 
  for (let i = 0; i < textInput.length; i++){
    arrNumbers.push(textInput[i].charCodeAt())
   
    if (arrNumbers[i] >= 65 && arrNumbers[i] <= 90) { 
      let calculate = ((arrNumbers[i] - 65 + (offset % 26) + 26) % 26) + 65;
      message = message + String.fromCharCode(calculate);
    }
    else if (arrNumbers[i] >= 97 && arrNumbers[i] <= 122) {
      let calculate2 = ((arrNumbers[i] - 97 + (offset % 26) + 26) % 26) + 97;
      message = message + String.fromCharCode(calculate2);
    }
    else {message = message + String.fromCharCode(arrNumbers[i])
    } 
  } 
 
  return message;
}
 
function incoming(){
  let textInput = document.getElementById("textInput").value;
  let offset = parseInt(document.getElementById("offset").value);
  document.getElementById("homeScreen").className="hide";
  document.getElementById("resultScreen").className="show";
  document.getElementById("message").innerHTML= cipherEncrypt(textInput, offset);
  document.getElementById("textInput").value=" ";
  document.getElementById("offset").value= " ";
}
 
function cipherDecrypt (textInput, offset){
  let arrNumbers = [];
  let message = "";
 
  for (let t = 0; t < textInput.length; t++){
    arrNumbers.push(textInput[t].charCodeAt())
   
    if (arrNumbers[t] >= 65 && arrNumbers[t] <= 90) { 
      let sum = ((arrNumbers[t] - 65 - (offset % 26) + 26) % 26) + 65;
      message = message + String.fromCharCode(sum);
    }
    else if (arrNumbers[t] >= 97 && arrNumbers[t] <= 122) {
      let sum2 = ((arrNumbers[t] - 97 - (offset % 26) + 26) % 26) + 97;
      message = message + String.fromCharCode(sum2);
    }
    else {message = message + String.fromCharCode(arrNumbers[t])
    }
  }
  
  return message;
}

function incoming2(){
  let textInput = document.getElementById("textInput").value;
  let offset = parseInt(document.getElementById("offset").value);
  document.getElementById("homeScreen").className="hide";
  document.getElementById("resultScreen").className="show";
  document.getElementById("message").innerHTML= cipherDecrypt(textInput, offset);
  document.getElementById("textInput").value=" ";
  document.getElementById("offset").value= " ";
}
 
function comeBack(){ 
  document.getElementById("homeScreen").className="show";
  document.getElementById("resultScreen").className="hide";
}
    