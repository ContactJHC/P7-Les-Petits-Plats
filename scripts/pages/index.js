// affichage des suggestions lors de la saisie dans la barre principale
// mainBarResearch()

// mauvaise fonction codée mais éléments à garder pour affichage
// dynamique des tags 
const test = recipes
// const test = [recipes[12], recipes[23], recipes[34], recipes[28],recipes[49],recipes[13],recipes[2]]

triRecherchePrincipale(test)

// document.querySelector('#searchSection__searchBar input').addEventListener(
//     'keyup', () => {
//         let result = triRecherchePrincipale(recipes)
//         console.log(result);
//         recipesDelete()
//         recipesDisplay(result)
//         suggestionsDelete()
//         suggestionsDisplay(updateTags(result))
//     }
// )

// initialisation de la page : affichage des recettes et des suggestions de filtres
recettesMAJ = [].concat(recipes) 
recipesDisplay(recettesMAJ)
let pretraitement = updateFiltres(recettesMAJ)
suggestionsDisplay(pretraitement)

// recherche depuis la barre principale
const saisie = document.querySelector('#searchSection__searchBar input')
saisie.addEventListener('keyup', ()=>{
    let valeur = saisie.value.toLocaleLowerCase()
    if (valeur.length > 2) {
        // màj de l'affichage et des filtres
        let result = triRecherchePrincipale(recipes)
        recipesDelete()
        recipesDisplay(result)
        suggestionsDelete()
        suggestionsDisplay(updateFiltres(result))
        recettesMAJ = [].concat(result)
console.log(result);

    } else {
        // remise à zéro de l'affichage si aucun tag sélectionné 
        recettesMAJ = [].concat(recipes)
        recipesDelete()
        recipesDisplay(recettesMAJ)
        suggestionsDelete()
        suggestionsDisplay(updateFiltres(recettesMAJ))

    }

// fin du keyup
})

// recherche depuis les filtres

const inputIngredients = document.querySelector('#saisieFiltreIngredients')
const inputAppareils = document.querySelector('#saisieFiltreAppareils')
const inputUstensiles = document.querySelector('#saisieFiltreUstensiles')

let recettesMAJavantRecherche = [].concat(recettesMAJ)

inputIngredients.addEventListener('keyup', () => {
    console.log('écriture dans input ingrédients :', inputIngredients.value);
    if (inputIngredients.value.length > 0) {
        let tableauAffichage = triTagIngredients(
            recettesMAJ,inputIngredients.value.toLocaleLowerCase())
        displaySuggestionIngredients(tableauAffichage)
    } 
})

inputAppareils.addEventListener('keyup', () => {
    console.log('écriture dans input appareils :', inputAppareils.value);
    if (inputAppareils.value.length > 0) {
        let tableauAffichage = triTagAppareils(
            recettesMAJ,inputAppareils.value.toLocaleLowerCase())
        displaySuggestionAppareils(tableauAffichage)
    }
// fin du keyup appareils
})

inputUstensiles.addEventListener('keyup', () => {
    console.log('écriture dans input ustensiles :', inputUstensiles.value);
    if (inputUstensiles.value.length > 0) {
        let tableauAffichage = triTagUstensiles(
            recettesMAJ,inputUstensiles.value.toLocaleLowerCase())
        displaySuggestionUstensiles(tableauAffichage)
    }
    // fin du keyup ustensiles
})