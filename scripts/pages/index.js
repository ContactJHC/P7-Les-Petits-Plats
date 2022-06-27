// affichage des suggestions lors de la saisie dans la barre principale
mainBarResearch()

// affichage de l'ensemble des recettes
recipesDisplay(recipes)

// mauvaise fonction codée mais éléments à garder pour affichage
// dynamique des tags 
const test = recipes
// const test = [recipes[12], recipes[23], recipes[34], recipes[28],recipes[49],recipes[13],recipes[2]]
let tes = updateTags(test)
suggestionsDisplay(tes)

triRecherchePrincipale(recipes)
