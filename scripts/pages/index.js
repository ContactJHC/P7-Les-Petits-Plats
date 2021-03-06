const mainSuggestions = document.querySelector('#mainSuggestions')

// création des tableaux de référence des recettes

let arrayName = []
let arrayIngredient = []
let arrayDescription = []

recipes.forEach((e)=>{
    // les valeurs de référence des tableaux et les valeurs rentrées sont des 
    // comparaisons entre chaînes de caractères en minuscules
    arrayName.push(e.name.toLocaleLowerCase())
    // le tableau d'ingrédients est un tableau de tableaux
    arrayIngredient.push(e.ingredients)
    arrayDescription.push(e.description.toLocaleLowerCase())
})

console.log(arrayName);

// affectation userInput à la barre de recherche

let userInput = document.querySelector('#searchSection__searchBar input')
userInput.addEventListener('keyup', ()=>{
    const inputValue = userInput.value.toLocaleLowerCase()
    if (inputValue.length > 2) {
        const arraySuggestions = arrayName.filter(nom => nom.includes(inputValue))
        let listeSuggestions = ''
        arraySuggestions.forEach(suggestion => {
            listeSuggestions += `<div class = "oneMainSuggestion">${suggestion}</div>`
        })
        mainSuggestions.innerHTML = listeSuggestions
        console.log(listeSuggestions);
    }
    
})



// codage algorithme de tri avec fonctions natives

// while (userInput.value.length>2) {
//     for (let item of )
// }

// userInput.addEventListener('keyup', function () {
//     while (userInput.value.length>2) {
//         console.log('oui')
//     }
// })


