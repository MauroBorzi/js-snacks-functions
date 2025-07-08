/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function letterExtracted(array){
  const firstLetter = []
  for(let i = 0; i < array.length; i++){
      const word = array[i]
    if(word.length > 0){
      firstLetter.push(word[0])
    }
  }
  return firstLetter
}


// Invoca la funzione qui e stampa il risultato in console

console.log(letterExtracted(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]