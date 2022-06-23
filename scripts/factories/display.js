// display.js comprend :
// recipesDisplay(tableau) affiche les recettes en argument
// recipesDelete() supprime les recettes affichées
// tagsDisplay(tableau)

// déclaration des éléments du DOM communs à au moins 2 fonctions
const mainTag = document.querySelector('main')

// input : un tableau de recettes
// output : affiche les card associées
function recipesDisplay(tableauRecettes) {
    // création des éléments HTML
    const recipesSection = document.createElement('section')
    const divRow = document.createElement('div')
    // affectation des attributs
    recipesSection.setAttribute('id', 'recipesSection')
    divRow.setAttribute('class', 'row')
    // renseignement des contenus
    tableauRecettes.forEach( e => 
        divRow.appendChild(recipe(e))
    )
    // imbrication des éléments
    mainTag.appendChild(recipesSection)
    recipesSection.appendChild(divRow)
}

// input : pas d'input
// output : retire les éléments de <main>
function recipesDelete() {
    if (mainTag.hasChildNodes()) {
        const recipesSection = document.querySelector('main section')
        mainTag.removeChild(recipesSection)
    }
}

// input : un tableau de tableaux de tags d'ingrédients- indice 0, 
// d'appareils- indice 1, d'ustensiles- indice 2
// output : affiche les tags associés
function tagsDisplay(tableauDeTableaux) {
    // création des éléments DOM et HTML
    const divChoice = document.querySelector('#searchSection__filters')
    const sectionSearch = document.querySelector('#searchSection')
    const divFiltersRow = document.createElement('div')
    // affectation des attributs 
    divFiltersRow.setAttribute('id', 'searchSection__selectedFilters')
    divFiltersRow.setAttribute('class', 'row')
    // renseignement des contenus 
    tableauDeTableaux[0].forEach(e =>
        divFiltersRow.appendChild(tagsCreation(e,'tagIngredient'))
        )
    tableauDeTableaux[1].forEach(e =>
        divFiltersRow.appendChild(tagsCreation(e,'tagAppareils'))
        )
    tableauDeTableaux[2].forEach(e =>
        divFiltersRow.appendChild(tagsCreation(e,'tagUstensiles'))
        )
    // imbrication des éléments
    sectionSearch.insertBefore(divFiltersRow, divChoice)
}