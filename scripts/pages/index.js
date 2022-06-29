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

// initialisation de la page : affichage des recettes et des tags
recettesMAJ = [].concat(recipes) 
recipesDisplay(recettesMAJ)
suggestionsDisplay(updateTags(recettesMAJ))

// recherche depuis la barre principale
const saisie = document.querySelector('#searchSection__searchBar input')
saisie.addEventListener('keyup', ()=>{
    let valeur = saisie.value.toLocaleLowerCase()
    if (valeur.length > 2) {
        // màj de l'affichage et des filtres
        let result = triRecherchePrincipale(recettesMAJ)
        recipesDelete()
        recipesDisplay(result)
        suggestionsDelete()
        suggestionsDisplay(updateTags(result))
console.log(result);

    } else {
        // remise à zéro de l'affichage si aucun tag sélectionné 
        recettesMAJ = [].concat(recipes)
        recipesDelete()
        recipesDisplay(recettesMAJ)
        suggestionsDelete()
        suggestionsDisplay(updateTags(recettesMAJ))

    }

// fin du keyup
})
