/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function letterExtracted(array,letter){
  const firstLetter = []
  for(let i = 0; i < array.length; i++){
      const word = array[i]
    if(word[0].toLowerCase() === letter.toLowerCase()){
      firstLetter.push(word)
    }
  }
  return firstLetter
}

const letters = `a`

// Invoca la funzione qui e stampa il risultato in console

console.log(letterExtracted(names,letters))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]