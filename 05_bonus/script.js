/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const greetings = (string) => {
  const date = new Date()
  const hours = date.getHours()
  let greetings = ''
  if(hours < 13){
    greetings = 'Buongiorno'
  }
  else if(hours < 18){
    greetings = 'Buon pomeriggio'
  }
  else{
    greetings = 'Buonasera'
  }
  return`${greetings} ${string}`
}


// Invoca la funzione qui e stampa il risultato in console

console.log(greetings(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.