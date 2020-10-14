function isEngLetter(symbol) {
  const engLetterTemplate = /[a-zA-Z]/;
  return engLetterTemplate.test(symbol);
}

function isLowerCase(letter) { return letter ===  letter.toLowerCase() }

function editLetter(letter, alphabet, shift, rightShift) {
  let letterIndex = alphabet.indexOf(letter);
  
  while (!alphabet[letterIndex + shift]) {
    if (rightShift) {
      shift = letterIndex + shift - alphabet.length;
      letterIndex = 0;
    } else {
      shift = letterIndex + shift;
      letterIndex = alphabet.length;
    }  
  }  

  return alphabet[letterIndex + shift];
}

function caesarCipher (text, shift, action) {
  const lowerEngAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperEngAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let rightShift;
  let editedText = '';

  if (action === 'encode') rightShift = shift > 0;
  else {
    rightShift = shift < 0;
    shift *= -1;
  }

  for (let symbol of text) {
    if (isEngLetter(symbol)) {
      isLowerCase(symbol) ?
        editedText += editLetter(symbol, lowerEngAlphabet, shift, rightShift) :
        editedText += editLetter(symbol, upperEngAlphabet, shift, rightShift)
    } else {
      editedText += symbol;
    }
  }

  return editedText;
}

module.exports = caesarCipher;