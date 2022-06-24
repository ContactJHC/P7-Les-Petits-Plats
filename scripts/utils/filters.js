// input : pas d'input
// output : ouverte/fermeture des suggestions du filtre en
//          fonction du focus sur son input

// Ingrédients
const filterIngredients = document.querySelector('#filterIngredients')
const saisieFiltreIngredients = document.querySelector('#saisieFiltreIngredients')
const tagSuggestionsIngredients =document.querySelector('#tagSuggestionsIngredients')
arrow = document.querySelector('#filterIngredients object')


function openFilterIngredients() {
    
    filterIngredients.setAttribute('class', 'filter filter--onclick col-7')
    saisieFiltreIngredients.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreIngredients.setAttribute('placeholder', 'Rechercher un ingrédient')
    tagSuggestionsIngredients.style.display = 'block'
    arrow.setAttribute('data', 'assets/icons/arrowUp.svg')


}

function closeFilterIngredients() {
    filterIngredients.setAttribute('class', 'filter col-2')
    saisieFiltreIngredients.setAttribute('class', 'saisieFiltre')
    saisieFiltreIngredients.setAttribute('placeholder', 'Ingrédients')
    tagSuggestionsIngredients.style.display = 'none'
    arrow.setAttribute('data', 'assets/icons/arrowDown.svg')
}

closeFilterIngredients()

saisieFiltreIngredients.addEventListener('focus',openFilterIngredients)
saisieFiltreIngredients.addEventListener('blur',closeFilterIngredients)

// Appareils

const filterAppareils = document.querySelector('#filterAppareils')
const saisieFiltreAppareils = document.querySelector('#saisieFiltreAppareils')
const tagSuggestionsAppareils =document.querySelector('#tagSuggestionsAppareils')
arrow = document.querySelector('#filterAppareils object')


function openFilterAppareils() {
    
    filterAppareils.setAttribute('class', 'filter filter--onclick col-7')
    saisieFiltreAppareils.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreAppareils.setAttribute('placeholder', 'Rechercher un appareil')
    tagSuggestionsAppareils.style.display = 'block'
    arrow.setAttribute('data', 'assets/icons/arrowUp.svg')


}

function closeFilterAppareils() {
    filterAppareils.setAttribute('class', 'filter col-2')
    saisieFiltreAppareils.setAttribute('class', 'saisieFiltre')
    saisieFiltreAppareils.setAttribute('placeholder', 'Appareils')
    tagSuggestionsAppareils.style.display = 'none'
    arrow.setAttribute('data', 'assets/icons/arrowDown.svg')
}

closeFilterAppareils()

saisieFiltreAppareils.addEventListener('focus',openFilterAppareils)
saisieFiltreAppareils.addEventListener('blur',closeFilterAppareils)

// Ustensiles

const filterUstensiles = document.querySelector('#filterUstensiles')
const saisieFiltreUstensiles = document.querySelector('#saisieFiltreUstensiles')
const tagSuggestionsUstensiles =document.querySelector('#tagSuggestionsUstensiles')
arrow = document.querySelector('#filterUstensiles object')


function openFilterUstensiles() {
    
    filterUstensiles.setAttribute('class', 'filter filter--onclick col-7')
    saisieFiltreUstensiles.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreUstensiles.setAttribute('placeholder', 'Rechercher un ustensile')
    tagSuggestionsUstensiles.style.display = 'block'
    arrow.setAttribute('data', 'assets/icons/arrowUp.svg')


}

function closeFilterUstensiles() {
    filterUstensiles.setAttribute('class', 'filter col-2')
    saisieFiltreUstensiles.setAttribute('class', 'saisieFiltre')
    saisieFiltreUstensiles.setAttribute('placeholder', 'Ustensiles')
    tagSuggestionsUstensiles.style.display = 'none'
    arrow.setAttribute('data', 'assets/icons/arrowDown.svg')
}

closeFilterUstensiles()

saisieFiltreUstensiles.addEventListener('focus',openFilterUstensiles)
saisieFiltreUstensiles.addEventListener('blur',closeFilterUstensiles)