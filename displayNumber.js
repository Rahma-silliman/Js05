// Écrire une fonction qui crée un tableau nombres contenant les nombres de 1 à 10 et qui affiche chaque élément du tableau à l'écran. 
function displayNumber(){
  tableau =[1,2,3,4,5,6,7,8,9,10];
   for(let i = 0; i < tableau.length; i++){
      console.log(tableau[i]);
};
};
displayNumber()
module.exports = displayNumber
