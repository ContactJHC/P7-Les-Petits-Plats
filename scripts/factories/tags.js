// input : chaîne de caractères issue d'un élément de
//  [[ingrédients],[appareils], [ustensiles]]
// output : le HTML d'un seul filtre/tag

function tagsCreation (string,typeTag) {
    // création des éléments HTML
    const divTag = document.createElement('div')
    const pTag = document.createElement('p')
    const closeTag = document.createElement('object')
    // affectation des attributs hors couleurs
    divTag.setAttribute('class', 'oneSelectedFilter col-2')
    closeTag.setAttribute('data', 'assets/icons/closeIngredient.svg')
    closeTag.setAttribute('type', 'image/svg+xml')
    // affectation des attributs liés aux couleurs, le bleu de ingrédient
    // étant la couleur par défaut
    if (typeTag == 'tagAppareils') {
        divTag.classList.add('tagAppareils')
    } else if (typeTag == 'tagUstensiles') {
        divTag.classList.add('tagUstensiles')
    }
    // renseignement des contenus 
    pTag.textContent = string
    // imbrication des éléments
    divTag.appendChild(pTag)
    divTag.appendChild(closeTag)
    return divTag
}

// input : chaîne de caractères issue d'un élément de
// [[ingrédients],[appareils], [ustensiles]]
// output : le HTML d'une seule suggestion <li> de filtre 
// principal à savoir, ingrédients, appareils ou ustensiles
function filterSuggestionCreation (string) {
    // création des éléments HTML
    liSuggestion = document.createElement('li')
    // affectation des attributs
    liSuggestion.setAttribute('class', 'col-4')
    // renseignement des contenus
    liSuggestion.textContent = string
    return liSuggestion
}
