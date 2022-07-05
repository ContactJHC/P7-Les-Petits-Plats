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
    if (tableauRecettes.length == 0) {
        const infoZeroAffichage = document.createElement('div')
        infoZeroAffichage.setAttribute('id','zeroAffichage')
        infoZeroAffichage.style.width = '90%'
        infoZeroAffichage.style.margin = 'auto'
        infoZeroAffichage.textContent = 
        'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'
        divRow.appendChild(infoZeroAffichage)
    }
    // imbrication des éléments
    mainTag.appendChild(recipesSection)
    recipesSection.appendChild(divRow)
}

// input : pas d'input
// output : retire les éléments de <main>
function recipesDelete() {
        const recipesSection = document.querySelector('main section')
        if (recipesSection) {
            document.querySelector('main').removeChild(recipesSection) 
        }
    }

// input : le HTML d'un seul filtre/tag
// output : affiche le tag sur la page 
function tagsDisplay(divTag) {
    // création des éléments DOM et HTML
    const divFiltersRow = document.querySelector('#searchSection__selectedFilters')
    // renseignement des contenus 
    divFiltersRow.appendChild(divTag)
}

function suggestionsDisplay(tableauDeTableaux) {
    const divIngredients = document.querySelector('#filterIngredients')
    const divAppareils = document.querySelector('#filterAppareils')
    const divUstensiles = document.querySelector('#filterUstensiles')
    const divListeIngredients = document.querySelector('#tagSuggestionsIngredients')
    const divListeAppareils = document.querySelector('#tagSuggestionsAppareils')
    const divListeUstensiles = document.querySelector('#tagSuggestionsUstensiles')
    // création des éléments
    const ulIngredients = document.createElement('ul')
    const ulAppareils = document.createElement('ul')
    const ulUstensiles = document.createElement('ul')
    // affectation des attributs
    // divListeIngredients.setAttribute('id', 'tagSuggestionsIngredients')
    // divListeAppareils.setAttribute('id', 'tagSuggestionsAppareils')
    // divListeUstensiles.setAttribute('id', 'tagSuggestionsUstensiles')
    // divListeIngredients.setAttribute('class', 'tagSuggestions')
    // divListeAppareils.setAttribute('class', 'tagSuggestions')
    // divListeUstensiles.setAttribute('class', 'tagSuggestions')
    ulIngredients.setAttribute('class', 'row')
    ulIngredients.setAttribute('id', 'ulIngredient')
    ulAppareils.setAttribute('class', 'row')
    ulAppareils.setAttribute('id', 'ulAppareils')
    ulUstensiles.setAttribute('class', 'row')
    ulUstensiles.setAttribute('id', 'ulUstensiles')
    // renseignement des contenus
    tableauDeTableaux[0].forEach(e =>
        ulIngredients.appendChild(filterSuggestionCreation(e, 'tagIngredients'))
        )
    tableauDeTableaux[1].forEach(e =>
        ulAppareils.appendChild(filterSuggestionCreation(e, 'tagAppareils'))
        )
    tableauDeTableaux[2].forEach(e =>
        ulUstensiles.appendChild(filterSuggestionCreation(e, 'tagUstensiles'))
        )
    // imbrication des éléments
    divIngredients.appendChild(divListeIngredients)
    divAppareils.appendChild(divListeAppareils)
    divUstensiles.appendChild(divListeUstensiles)
    divListeIngredients.appendChild(ulIngredients)
    divListeAppareils.appendChild(ulAppareils)
    divListeUstensiles.appendChild(ulUstensiles)
}

function suggestionsDelete() {
    const divListeIngredients = document.querySelector('#tagSuggestionsIngredients')
    const divListeAppareils = document.querySelector('#tagSuggestionsAppareils')
    const divListeUstensiles = document.querySelector('#tagSuggestionsUstensiles')
    if (document.querySelector('#ulIngredient')) {
        const ulIngredient = document.querySelector('#ulIngredient')
        const ulAppareils = document.querySelector('#ulAppareils')
        const ulUstensiles = document.querySelector('#ulUstensiles')
        divListeIngredients.removeChild(ulIngredient)
        divListeAppareils.removeChild(ulAppareils)
        divListeUstensiles.removeChild(ulUstensiles)
    }
}

function displaySuggestionIngredients(tableauAffichage) {
    const divIngredients = document.querySelector('#filterIngredients')
    // const divAppareils = document.querySelector('#filterAppareils')
    // const divUstensiles = document.querySelector('#filterUstensiles')
    const divListeIngredients = document.querySelector('#tagSuggestionsIngredients')
    // const divListeAppareils = document.querySelector('#tagSuggestionsAppareils')
    // const divListeUstensiles = document.querySelector('#tagSuggestionsUstensiles')
    // // création des éléments
    const ulIngredientsAncien = document.querySelector('#ulIngredient')
    // //retrait de ce qui est affiché
    divListeIngredients.removeChild(ulIngredientsAncien)
    // const ulAppareils = document.createElement('ul')
    // const ulUstensiles = document.createElement('ul')
    //  //affectation des attributs
    // divListeIngredients.setAttribute('id', 'tagSuggestionsIngredients')
    // divListeAppareils.setAttribute('id', 'tagSuggestionsAppareils')
    // divListeUstensiles.setAttribute('id', 'tagSuggestionsUstensiles')
    // divListeIngredients.setAttribute('class', 'tagSuggestions')
    // divListeAppareils.setAttribute('class', 'tagSuggestions')
    // divListeUstensiles.setAttribute('class', 'tagSuggestions')
    //  //ajout des nouvelles informations
    const ulIngredients = document.createElement('div')
    ulIngredients.setAttribute('class', 'row')
    ulIngredients.setAttribute('id', 'ulIngredient')
    ulIngredients.setAttribute('style',
        'list-style:none;padding-left:15px;white-space:nowrap;')
    // ulAppareils.setAttribute('class', 'row')
    // ulAppareils.setAttribute('id', 'ulAppareils')
    // ulUstensiles.setAttribute('class', 'row')
    // ulUstensiles.setAttribute('id', 'ulUstensiles')
    //  //renseignement des contenus
    tableauAffichage.forEach(e => {
        const liAffichage = filterSuggestionCreation(e, 'tagIngredients')
        liAffichage.setAttribute('style',
            'overflow:hidden;text-overflow: ellipsis;font-size: 0.7rem;font-weight: lighter;')
        ulIngredients.appendChild(liAffichage)
    })
    // tableauDeTableaux[1].forEach(e =>
    //     ulAppareils.appendChild(filterSuggestionCreation(e, 'tagAppareils'))
    //     )
    // tableauDeTableaux[2].forEach(e =>
    //     ulUstensiles.appendChild(filterSuggestionCreation(e, 'tagUstensiles'))
    //     )
    //  //imbrication des éléments
    divIngredients.appendChild(divListeIngredients)
    // divAppareils.appendChild(divListeAppareils)
    // divUstensiles.appendChild(divListeUstensiles)
    divListeIngredients.appendChild(ulIngredients)
    // divListeAppareils.appendChild(ulAppareils)
    // divListeUstensiles.appendChild(ulUstensiles)
}

function displaySuggestionAppareils(tableauAffichage) {
    // const divIngredients = document.querySelector('#filterIngredients')
    const divAppareils = document.querySelector('#filterAppareils')
    // const divUstensiles = document.querySelector('#filterUstensiles')
    // const divListeIngredients = document.querySelector('#tagSuggestionsIngredients')
    const divListeAppareils = document.querySelector('#tagSuggestionsAppareils')
    // const divListeUstensiles = document.querySelector('#tagSuggestionsUstensiles')
    // // création des éléments
    const ulAppareilsAncien = document.querySelector('#ulAppareils')
    // //retrait de ce qui est affiché
    divListeAppareils.removeChild(ulAppareilsAncien)
    // const ulAppareils = document.createElement('ul')
    // const ulUstensiles = document.createElement('ul')
    //  //affectation des attributs
    // divListeIngredients.setAttribute('id', 'tagSuggestionsIngredients')
    // divListeAppareils.setAttribute('id', 'tagSuggestionsAppareils')
    // divListeUstensiles.setAttribute('id', 'tagSuggestionsUstensiles')
    // divListeIngredients.setAttribute('class', 'tagSuggestions')
    // divListeAppareils.setAttribute('class', 'tagSuggestions')
    // divListeUstensiles.setAttribute('class', 'tagSuggestions')
    //  //ajout des nouvelles informations
    const ulAppareils = document.createElement('div')
    ulAppareils.setAttribute('class', 'row')
    ulAppareils.setAttribute('id', 'ulAppareils')
    ulAppareils.setAttribute('style',
        'list-style:none;padding-left:15px;white-space:nowrap;')
    // ulAppareils.setAttribute('class', 'row')
    // ulAppareils.setAttribute('id', 'ulAppareils')
    // ulUstensiles.setAttribute('class', 'row')
    // ulUstensiles.setAttribute('id', 'ulUstensiles')
    //  //renseignement des contenus
    tableauAffichage.forEach(e => {
        const liAffichage = filterSuggestionCreation(e, 'tagAppareils')
        liAffichage.setAttribute('style',
            'overflow:hidden;text-overflow: ellipsis;font-size: 0.7rem;font-weight: lighter;')
        ulAppareils.appendChild(liAffichage)
    })
    // tableauDeTableaux[1].forEach(e =>
    //     ulAppareils.appendChild(filterSuggestionCreation(e, 'tagAppareils'))
    //     )
    // tableauDeTableaux[2].forEach(e =>
    //     ulUstensiles.appendChild(filterSuggestionCreation(e, 'tagUstensiles'))
    //     )
    //  //imbrication des éléments
    // divIngredients.appendChild(divListeIngredients)
    divAppareils.appendChild(divListeAppareils)
    // divUstensiles.appendChild(divListeUstensiles)
    // divListeIngredients.appendChild(ulIngredients)
    divListeAppareils.appendChild(ulAppareils)
    // divListeUstensiles.appendChild(ulUstensiles)
}

function displaySuggestionUstensiles(tableauAffichage) {
    // const divIngredients = document.querySelector('#filterIngredients')
    // const divAppareils = document.querySelector('#filterAppareils')
    const divUstensiles = document.querySelector('#filterUstensiles')
    // const divListeIngredients = document.querySelector('#tagSuggestionsIngredients')
    // const divListeAppareils = document.querySelector('#tagSuggestionsAppareils')
    const divListeUstensiles = document.querySelector('#tagSuggestionsUstensiles')
    // // création des éléments
    const ulUstensilesAncien = document.querySelector('#ulUstensiles')
    // //retrait de ce qui est affiché
    divListeUstensiles.removeChild(ulUstensilesAncien)
    // const ulAppareils = document.createElement('ul')
    // const ulUstensiles = document.createElement('ul')
    //  //affectation des attributs
    // divListeIngredients.setAttribute('id', 'tagSuggestionsIngredients')
    // divListeAppareils.setAttribute('id', 'tagSuggestionsAppareils')
    // divListeUstensiles.setAttribute('id', 'tagSuggestionsUstensiles')
    // divListeIngredients.setAttribute('class', 'tagSuggestions')
    // divListeAppareils.setAttribute('class', 'tagSuggestions')
    // divListeUstensiles.setAttribute('class', 'tagSuggestions')
    //  //ajout des nouvelles informations
    const ulUstensiles = document.createElement('div')
    ulUstensiles.setAttribute('class', 'row')
    ulUstensiles.setAttribute('id', 'ulUstensiles')
    ulUstensiles.setAttribute('style',
        'list-style:none;padding-left:15px;white-space:nowrap;')
    // ulAppareils.setAttribute('class', 'row')
    // ulAppareils.setAttribute('id', 'ulAppareils')
    // ulUstensiles.setAttribute('class', 'row')
    // ulUstensiles.setAttribute('id', 'ulUstensiles')
    //  //renseignement des contenus
    tableauAffichage.forEach(e => {
        const liAffichage = filterSuggestionCreation(e, 'tagUstensiles')
        liAffichage.setAttribute('style',
            'overflow:hidden;text-overflow: ellipsis;font-size: 0.7rem;font-weight: lighter;')
        ulUstensiles.appendChild(liAffichage)
    })
    // tableauDeTableaux[1].forEach(e =>
    //     ulAppareils.appendChild(filterSuggestionCreation(e, 'tagAppareils'))
    //     )
    // tableauDeTableaux[2].forEach(e =>
    //     ulUstensiles.appendChild(filterSuggestionCreation(e, 'tagUstensiles'))
    //     )
    //  //imbrication des éléments
    // divIngredients.appendChild(divListeIngredients)
    // divAppareils.appendChild(divListeAppareils)
    divUstensiles.appendChild(divListeUstensiles)
    // divListeIngredients.appendChild(ulIngredients)
    // divListeAppareils.appendChild(ulAppareils)
    divListeUstensiles.appendChild(ulUstensiles)
}
