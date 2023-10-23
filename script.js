const randomNumber = Math.floor(Math.random() * 5) + 1; 

while (true) {
  let guess = parseInt(prompt("Kies een getal tussen de 1 en de 5"));

  if (guess === randomNumber) {
    alert("Juist!");
    break; 
  } else {
    alert("Probeer opnieuw."); 
  }
}