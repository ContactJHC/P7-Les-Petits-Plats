// display.js comprend deux fonctions
// recipesDisplay(tab) affiche les recettes en argument
// recipesDelete() supprime les recettes affichées

// déclaration des éléments du DOM communs aux deux fonctions
const mainTag = document.querySelector('main')

// input : un tableau de recettes
// output : affiche les card associées
function recipesDisplay (tableauRecettes) {
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

