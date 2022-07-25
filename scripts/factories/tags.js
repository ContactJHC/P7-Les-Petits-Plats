// input : chaîne de caractères issue d'un élément de
//  [[ingrédients],[appareils], [ustensiles]]
// output : le HTML d'un seul tag

function tagsCreation (string,typeTag) {
    // création des éléments HTML
    const divTag = document.createElement('div')
    const pTag = document.createElement('p')
    const closeTag = document.createElement('img')
    // affectation des attributs hors couleurs
    divTag.setAttribute('id', `divID${string}`)
    divTag.setAttribute('class', 'oneSelectedFilter col-9 col-sm-3 col-md-2')
    pTag.setAttribute('class', 'listeDeTags')
    closeTag.setAttribute('id', `closeID${string}`)
    closeTag.setAttribute('src', 'assets/icons/closeIngredient.svg')
    closeTag.setAttribute('alt', 'croix de fermeture de tag')
    closeTag.style.pointerEvents = 'all'
    // closeTag.addEventListener('mouseover', ()=>{console.log('mouseover effectif');})
    divTag.addEventListener('click', () => {
        const divFiltersRow = document.querySelector('#searchSection__selectedFilters')
        if (divFiltersRow) {
            divFiltersRow.removeChild(divTag)
            listeDeTagsATester = document.querySelectorAll('.listeDeTags')
            recettesMAJ = [].concat(recipes)
            refresh(recettesMAJ)
            listeDeTagsATester.forEach( (e,i) => {
                recettesMAJ = triApresSuppressionTag(recettesMAJ, e.innerText) 
                refresh(recettesMAJ)
            })
        } else {
            console.log('pas de divRow');}
    })
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
// update.js : [[ingrédients],[appareils], [ustensiles]]
// output : le HTML d'une seule suggestion <li> de filtre 
// principal à savoir, ingrédients, appareils ou ustensiles
function filterSuggestionCreation (string, typeTag) {
    // création des éléments HTML
    liSuggestion = document.createElement('li')
    // affectation des attributs
    liSuggestion.setAttribute('class', 'col-12 col-sm-6 col-md-4')
    // renseignement des contenus
    liSuggestion.textContent = string
    liSuggestion.addEventListener('click', () => {
        tagsDisplay(tagsCreation(string, typeTag))
        recettesMAJ = triFiltres(string, typeTag, recettesMAJ)
        refresh(recettesMAJ)
    })
    return liSuggestion
}
