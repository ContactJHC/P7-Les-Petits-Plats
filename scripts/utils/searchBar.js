
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

// algorithme de tri 
let recettesMAJ = []

// input : le tableau de recettes
// output : un tableau de recettes correspondant à la recherche - sans doublon
function triRecherchePrincipale(recipes) {
    const saisie = document.querySelector('#searchSection__searchBar input')
    let valeur = saisie.value.toLocaleLowerCase()
    let tableauApresTri = []
        if (valeur.length > 2) {
            recipes.forEach(e => {
                if (e.name.toLocaleLowerCase().includes(valeur)) {
                    tableauApresTri.push(e)
                }  
                e.ingredients.forEach(elem => {
                    if (elem.ingredient.toLocaleLowerCase().includes(valeur)) {
                        tableauApresTri.push(e)
                    }
                })
                if (e.description.includes(valeur)) {
                    tableauApresTri.push(e) 
                }
                e.ustensils.forEach(eleme => {
                    if (eleme.includes(valeur)) {
                        tableauApresTri.push(e)
                    }
                })
            })
        }
        recettesMAJ = [].concat(tableauApresTri)
        console.log(recettesMAJ)
    return filtreDoublons(tableauApresTri)
}

// 118 à 161
// fonction sans doublons donc sans tri de doublons mais problème avec ustensiles

// function triRecherchePrincipale(recipes) {
//     const saisie = document.querySelector('#searchSection__searchBar input')
//     let valeur = saisie.value.toLocaleLowerCase()
//     let tableauApresTri = []
//         if (valeur.length > 2) {
//             recipes.forEach(e => {
//                 let bool = false
//                 if (e.name.toLocaleLowerCase().includes(valeur)) {
//                     tableauApresTri.push(e)
//                     bool = true
//                 }  
//                 if (bool == false) {
//                     let boole = false
//                     e.ingredients.forEach(elem => {
//                         if (elem.ingredient.toLocaleLowerCase().includes(valeur)) {
//                             boole = true
//                         }
//                     })
//                     if (boole == true) {
//                         tableauApresTri.push(e)
//                         bool = true
//                     }
//                 }
//                 if (bool == false && e.description.includes(valeur)) {
//                     tableauApresTri.push(e)
//                     bool = true 
//                 }

//                 if (bool = false) {
//                     let booleen = false
//                     e.ustensils.forEach(eleme => {
//                         if (eleme.includes(valeur)) {
//                             booleen = true
//                         }
//                     })
//                     if (booleen == true) {
//                         tableauApresTri.push(e)
//                     }
//                 }
//             })
//             console.log(filtreDoublons(tableauApresTri));
//         }
//     return tableauApresTri
// }
