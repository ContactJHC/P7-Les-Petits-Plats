// input : pas d'input
// output : ouverte/fermeture des suggestions du filtre en
//          fonction du focus sur son input

// Ingrédients
const filterIngredients = document.querySelector('#filterIngredients')
const saisieFiltreIngredients = document.querySelector('#saisieFiltreIngredients')
const tagSuggestionsIngredients =document.querySelector('#tagSuggestionsIngredients')
const arrowIngredients = document.querySelector('#filterIngredients img')

function openFilterIngredients() {
    
    filterIngredients.setAttribute('class', 'filter filter--onclick col-12 col-sm-11 col-md-5 col-lg-7')
    saisieFiltreIngredients.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreIngredients.setAttribute('placeholder', 'Rechercher un ingrédient')
    saisieFiltreIngredients.focus()
    tagSuggestionsIngredients.style.display = 'block'
    arrowIngredients.setAttribute('src', 'assets/icons/arrowUp.svg')
    arrowIngredients.setAttribute('alt', 'icône de flèche montante')


}

function closeFilterIngredients() {
    filterIngredients.setAttribute('class', 'filter col-12 col-sm-9 col-md-3 col-lg-2')
    saisieFiltreIngredients.setAttribute('class', 'saisieFiltre')
    saisieFiltreIngredients.setAttribute('placeholder', 'Ingrédients')
    tagSuggestionsIngredients.style.display = 'none'
    arrowIngredients.setAttribute('src', 'assets/icons/arrowDown.svg')
    arrowIngredients.setAttribute('alt', 'icône de flèche descendante')
}

closeFilterIngredients()

filterIngredients.addEventListener('click', () => {
    if (saisieFiltreIngredients.classList.contains('filtreOuvert')) {
        closeFilterIngredients()
    } else {
        openFilterIngredients()
    }
})
// saisieFiltreIngredients.addEventListener('click',openFilterIngredients)
filterIngredients.addEventListener('mouseleave',closeFilterIngredients)

// Appareils

const filterAppareils = document.querySelector('#filterAppareils')
const saisieFiltreAppareils = document.querySelector('#saisieFiltreAppareils')
const tagSuggestionsAppareils =document.querySelector('#tagSuggestionsAppareils')
const arrowAppareils = document.querySelector('#filterAppareils img')


function openFilterAppareils() {
    
    filterAppareils.setAttribute('class', 'filter filter--onclick col-12 col-sm-11 col-md-5 col-lg-7')
    saisieFiltreAppareils.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreAppareils.setAttribute('placeholder', 'Rechercher un appareil')
    saisieFiltreAppareils.focus()
    tagSuggestionsAppareils.style.display = 'block'
    arrowAppareils.setAttribute('src', 'assets/icons/arrowUp.svg')
    arrowAppareils.setAttribute('alt', 'icône de flèche montante')

}

function closeFilterAppareils() {
    filterAppareils.setAttribute('class', 'filter col-12 col-sm-9 col-md-3 col-lg-2')
    saisieFiltreAppareils.setAttribute('class', 'saisieFiltre')
    saisieFiltreAppareils.setAttribute('placeholder', 'Appareils')
    tagSuggestionsAppareils.style.display = 'none'
    arrowAppareils.setAttribute('src', 'assets/icons/arrowDown.svg')
    arrowAppareils.setAttribute('alt', 'icône de flèche descendante')

}

closeFilterAppareils()

filterAppareils.addEventListener('click', () => {
    if (saisieFiltreAppareils.classList.contains('filtreOuvert')) {
        closeFilterAppareils()
    } else {
        openFilterAppareils()
    }
})
// saisieFiltreAppareils.addEventListener('click',openFilterAppareils)
filterAppareils.addEventListener('mouseleave',closeFilterAppareils)

// Ustensiles

const filterUstensiles = document.querySelector('#filterUstensiles')
const saisieFiltreUstensiles = document.querySelector('#saisieFiltreUstensiles')
const tagSuggestionsUstensiles =document.querySelector('#tagSuggestionsUstensiles')
const arrowUstensiles = document.querySelector('#filterUstensiles img')


function openFilterUstensiles() {
    
    filterUstensiles.setAttribute('class', 'filter filter--onclick col-12 col-sm-11 col-md-5 col-lg-7')
    saisieFiltreUstensiles.setAttribute('class', 'saisieFiltre filtreOuvert')
    saisieFiltreUstensiles.setAttribute('placeholder', 'Rechercher un ustensile')
    saisieFiltreUstensiles.focus()
    tagSuggestionsUstensiles.style.display = 'block'
    arrowUstensiles.setAttribute('src', 'assets/icons/arrowUp.svg')
    arrowUstensiles.setAttribute('alt', 'icône de flèche montante')

}

function closeFilterUstensiles() {
    filterUstensiles.setAttribute('class', 'filter col-12 col-sm-9 col-md-3 col-lg-2')
    saisieFiltreUstensiles.setAttribute('class', 'saisieFiltre')
    saisieFiltreUstensiles.setAttribute('placeholder', 'Ustensiles')
    tagSuggestionsUstensiles.style.display = 'none'
    arrowUstensiles.setAttribute('src', 'assets/icons/arrowDown.svg')
    arrowUstensiles.setAttribute('alt', 'icône de flèche descendante')

}

closeFilterUstensiles()

filterUstensiles.addEventListener('click', () => {
    if (saisieFiltreUstensiles.classList.contains('filtreOuvert')) {
        closeFilterUstensiles()
    } else {
        openFilterUstensiles()
    }
})
// saisieFiltreUstensiles.addEventListener('click',openFilterUstensiles)
filterUstensiles.addEventListener('mouseleave',closeFilterUstensiles)


