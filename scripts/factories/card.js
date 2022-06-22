// données d'entrée : pour i entier, recipes[i] soit les données d'une seule recette
// fournit en sortie : la fonction générant le HTML d'une seule card de recette

function recipe(dataOneRecipe) {
    // affectation des informations de la recette
    const {name, ingredients, time, description} = dataOneRecipe

    // la liste d'ingrédient étant un tableau, sa génération HTML se traite
    // de manière différenciée
    // entrée: ingr = recipes->ingredients->ingredients[i] = objet
    // sortie: un seul élément HTML <li>
    
    function recipeLi(ingr) {
        // création des éléments HTML hors unit
        const {ingredient, quantity, unit} = ingr
        const divCard__texte__body__li = document.createElement('li')
        const divCard__texte__body__li__pIngredient = document.createElement('p')
        const divCard__texte__body__li__pQuantity = document.createElement('p')
        // affectation des attributs hors unit
        divCard__texte__body__li__pIngredient.setAttribute('class', 'nomIngredient')
        divCard__texte__body__li__pQuantity.setAttribute('class','quantiteIngredient')
        // renseignement des contenus hors unit
        divCard__texte__body__li__pIngredient.textContent = `${ingredient} : `
        divCard__texte__body__li__pQuantity.textContent = quantity
        // imbrication des éléments
        divCard__texte__body__li.appendChild(divCard__texte__body__li__pIngredient)
        divCard__texte__body__li.appendChild(divCard__texte__body__li__pQuantity)
        // traitement de unit, si présent
        if (unit !== undefined) {
            const divCard__texte__body__li__pUnit = document.createElement('p')
            divCard__texte__body__li__pUnit.setAttribute('class','quantiteIngredient')
            divCard__texte__body__li__pUnit.textContent = ` ${unit}`
            divCard__texte__body__li.appendChild(divCard__texte__body__li__pUnit)
        }
        return divCard__texte__body__li
    }

    // création des éléments HTML hors ingrédients
    const divCard = document.createElement('div')
    const divCard__image = document.createElement('div')
    const divCard__texte = document.createElement('div')
    const divCard__texte__header = document.createElement('div')
    const divCard__texte__header__h = document.createElement('h1')
    const divCard__texte__header__div = document.createElement('div')
    const divCard__texte__header__div__object = document.createElement('object')
    const divCard__texte__header__div__p = document.createElement('p')
    const divCard__texte__body = document.createElement('div')
    const divCard__texte__body__ul = document.createElement('ul')
    const divCard__texte__body__notice = document.createElement('div')
    const divCard__texte__body__notice__p = document.createElement('p')
    // affectation des attributs hors ingrédients
    divCard.setAttribute('class', 'recipesSection__card col-4')
    divCard__image.setAttribute('class', 'recipesSection__card__imageFictive')
    divCard__texte.setAttribute('class', 'recipesSection__card__texteFictif')
    divCard__texte__header.setAttribute('class', 'recipesSection__card__texteFictif__header')
    divCard__texte__header__div__object.setAttribute('data', 'assets/icons/clock.svg')
    divCard__texte__header__div__object.setAttribute('type', 'image/svg+xml')
    divCard__texte__body.setAttribute('class', 'recipesSection__card__texteFictif__body')
    divCard__texte__body__notice.setAttribute('class', 'recipesSection__card__notice')
    // renseignement des contenus hors ingrédients
    divCard__texte__header__h.textContent = name
    divCard__texte__header__div__p.textContent = `${time} min`
    divCard__texte__body__notice__p.textContent = description
    // imbrication des éléments
    divCard.appendChild(divCard__image)
    divCard.appendChild(divCard__texte)
    divCard__texte.appendChild(divCard__texte__header)
    divCard__texte__header.appendChild(divCard__texte__header__h)
    divCard__texte__header.appendChild(divCard__texte__header__div)
    divCard__texte__header__div.appendChild(divCard__texte__header__div__object)
    divCard__texte__header__div.appendChild(divCard__texte__header__div__p)
    divCard__texte.appendChild(divCard__texte__body)
    divCard__texte__body.appendChild(divCard__texte__body__ul)
        // création de la liste d'ingrédients en fonction du nombre d'éléments dans 
        // dataOneRecipe.ingredients, chaque élément étant un <li>
    ingredients.forEach( (e) => {

        divCard__texte__body__ul.appendChild(recipeLi(e))
        
        }
    )
    divCard__texte__body.appendChild(divCard__texte__body__notice)
    divCard__texte__body__notice.appendChild(divCard__texte__body__notice__p)
    return divCard
}