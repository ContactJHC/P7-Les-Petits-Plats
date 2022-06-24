// input : pas d'input
// output : changement de sens de la flèche d'un des filtres
// arrow : sélecteur de la flèche - directionVoulue : le nouveau sens souhaité
// nomDuFiltre : nom du filtre auquel est rattaché la flèche
let arrow = ''
// 2 valeurs possibles : up, down
let directionVoulue= ''
// 3 valeurs possibles : ingredients, appareils, ustensiles
let nomDuFiltre = ''

function switchArrow(nomDuFiltre, directionVoulue ) {
    // transforme flèche vers le bas en flèche vers le haut
    if (nomDuFiltre == 'ingredients') {
        arrow = document.querySelector('#filterIngredients object')
    } else if (nomDuFiltre == 'appareils') {
        arrow = document.querySelector('#filterAppareils object')
    } else if (nomDuFiltre == 'ustensiles') {
        arrow = document.querySelector('#filterUstensiles object')
    }
    if (directionVoulue == 'up') {
        arrow.setAttribute('data', 'assets/icons/arrowUp.svg')
    } else if (directionVoulue == 'down') {
        arrow.setAttribute('data', 'assets/icons/arrowDown.svg')
    }
}


