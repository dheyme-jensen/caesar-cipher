function testCoding (expectedResult, obtainedResult){
  if(obtainedResult === expectedResult){
   console.log('sucesso');
  }
  else{
   console.log('não deu certo, '  +  'o resultado esperado era '  +  expectedResult +  ' ,mas resultado obtido foi '  + obtainedResult);
  }

}
  testCoding('uftuboep', cipherEncrypt('testando', 1));
  testCoding('sdrszmcn', cipherEncrypt('testando', 25 ));
  testCoding('UFTUBOEP', cipherEncrypt('TESTANDO', 27 ));
  testCoding('paopwjzk', cipherEncrypt('testando', 100 ));
  testCoding('sdrszmcn', cipherEncrypt('testando', -1));
  testCoding('UftUboep', cipherEncrypt('TesTando', 1));
  testCoding('wbnpt uftubs', cipherEncrypt('vamos testar', 1));
  testCoding('uftuboep123', cipherEncrypt('testando123', 1));
  testCoding('uêtuáoeõ', cipherEncrypt('têstándõ', 1));
  testCoding('uftuboep!@#$', cipherEncrypt('testando!@#$', 1));

function testDecoding (expectedResult, obtainedResult){
  if(obtainedResult === expectedResult){
    console.log('sucesso');
  }
  else{
    console.log('não deu certo, '  +  'o resultado esperado era '  +  expectedResult +  ' ,mas resultado obtido foi '  + obtainedResult);
  }

}
  testDecoding('testando', cipherDecrypt('uftuboep', 1));
  testDecoding('testando', cipherDecrypt('sdrszmcn', 25 ));
  testDecoding('TESTANDO', cipherDecrypt('UFTUBOEP', 27 ));
  testDecoding('testando', cipherDecrypt('paopwjzk', 100 ));
  testDecoding('testando', cipherDecrypt('sdrszmcn', -1));
  testDecoding('TesTando', cipherDecrypt('UftUboep', 1));
  testDecoding('vamos testar', cipherDecrypt('wbnpt uftubs', 1));
  testDecoding('testando123', cipherDecrypt('uftuboep123', 1));
  testDecoding('têstándõ', cipherDecrypt('uêtuáoeõ', 1));
  testDecoding('testando!@#$', cipherDecrypt('uftuboep!@#$', 1));