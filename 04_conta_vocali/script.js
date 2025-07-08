/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(text) {
  const vocali = ["a", "e", "i", "o", "u"]
  let numeroVocali = 0
  for (let i = 0; i < text.length; i++) {
      const vocale = text[i]
    if (vocali.includes(vocale)) {
      numeroVocali += +1
    }
  }
  return numeroVocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)