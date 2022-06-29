// affichage des suggestions lors de la saisie dans la barre principale
// mainBarResearch()

// affichage de l'ensemble des recettes
recipesDisplay(recipes)

// mauvaise fonction codée mais éléments à garder pour affichage
// dynamique des tags 
const test = recipes
// const test = [recipes[12], recipes[23], recipes[34], recipes[28],recipes[49],recipes[13],recipes[2]]
let tes = updateTags(test)
suggestionsDisplay(tes)


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


const saisie = document.querySelector('#searchSection__searchBar input')
saisie.addEventListener('keyup', ()=>{
    let valeur = saisie.value.toLocaleLowerCase()
    if (valeur.length > 2) {
        let result = triRecherchePrincipale(recipes)
        console.log(result);
        recipesDelete()
        recipesDisplay(result)
        suggestionsDelete()
        suggestionsDisplay(updateTags(result))
    } else {
        recipesDelete()
        recipesDisplay(recipes)
        suggestionsDelete()
        suggestionsDisplay(updateTags(recipes))
    }

// fin du keyup
})
