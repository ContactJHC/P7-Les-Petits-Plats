function mainBarResearch() {
    // création et remplissage des tableaux de référence des recettes -
    // les valeurs rentrées par l'utilisateur seront comparées aux valeurs de
    // ces tableaux : un tableau reprend les résultats qui sont affichés 
    // dans mainSuggestions et s'actualise à chaque caractère saisi
    const mainSuggestions = document.querySelector('#mainSuggestions')
    let arrayName = []
    let arrayIngredient = []
    let arrayDescription = []

    recipes.forEach((e)=>{
        // les valeurs de référence des tableaux et les valeurs rentrées sont des 
        // comparaisons entre chaînes de caractères en minuscules
        arrayName.push(e.name.toLocaleLowerCase())
        // le tableau d'ingrédients est un tableau de tableaux
        e.ingredients.forEach(sousE => arrayIngredient.push(sousE.ingredient.toLocaleLowerCase()))
        arrayDescription.push(e.description.toLocaleLowerCase())
    })

    // affectation userInput à la barre de recherche
    let userInput = document.querySelector('#searchSection__searchBar input')
    userInput.addEventListener('keyup', ()=>{
        const inputValue = userInput.value.toLocaleLowerCase()
        // l'affichage de suggestion ne doit se faire qu'à partir de 3 caractères
        if (inputValue.length > 2) {
            // recherche dans les noms de recettes
            // les indices des suggestions sont stockés pour permettre
            // la récupération des informations via recipes[indice]
            let arrayNameSuggestionsIndex = []
            const arrayNameSuggestions = arrayName.filter((nom, indexNom) => { 
                if (nom.includes(inputValue)) {
                    arrayNameSuggestionsIndex.push(indexNom)
                    return true
                }                
            })            
            let listeSuggestions = ''
            arrayNameSuggestions.forEach(suggestion => {
                listeSuggestions += `<div class = "oneMainSuggestion">${suggestion}</div>`
            })
            // recherche dans les ingrédients
            let arrayIngredientsSuggestionsIndex = []
            const arrayIngredientSuggestions = arrayIngredient.filter((ingredient, indexIngredient) => {
                if (ingredient.includes(inputValue)) {
                    arrayIngredientsSuggestionsIndex.push(indexIngredient)
                    return true
                }
            })
            console.log(arrayIngredientsSuggestionsIndex);

            arrayIngredientSuggestions.forEach(suggestion => {
                listeSuggestions += `<div class = "oneMainSuggestion">${suggestion}</div>`
            })
            // recherche dans les descriptions
            const arrayDescriptionSuggestions = arrayDescription.filter(description => 
                description.includes(inputValue))
            arrayDescriptionSuggestions.forEach(suggestion => 
                listeSuggestions += `<div class = "oneMainSuggestion">${suggestion}</div>`
            )
            mainSuggestions.innerHTML = listeSuggestions
        } else {
            mainSuggestions.innerHTML = ''
        }
    })
}