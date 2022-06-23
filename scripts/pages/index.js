// affichage des suggestions lors de la saisie dans la barre principale
mainBarResearch()

// affichage de l'ensemble des recettes
recipesDisplay(recipes)

document.querySelector('.oneSelectedFilter').addEventListener('click', recipesDelete)

const test = [recipes[1], recipes[2], recipes[3]]
let tes = updateTags(test)
tagsDisplay(tes)