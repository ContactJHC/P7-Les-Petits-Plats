// input : un tableau de recettes
// output : affiche les card associées

function recipesDisplay (tableauRecettes) {
    // création des éléments DOM et HTML
    const mainTag = document.querySelector('main')
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