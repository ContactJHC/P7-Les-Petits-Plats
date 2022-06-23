// input : un tableau de valeurs avec doublons
// output : le tableau sans doublons
function filtreDoublons (tableauAvecDoublons) {
    return new Set(tableauAvecDoublons)
}

// input : tableau de recettes
// output : un tableau de tableaux de tags d'ingrédients, 
// d'appareils, d'ustensiles
function updateIngredients (listeRecettes) {
    let tagsIngredients = []
    let tagsAppareils = []
    let tagsUstensiles = []
    listeRecettes.forEach((e)=>{
        e.ingredients.forEach(sousE =>
            tagsIngredients.push(sousE.ingredient.toLocaleLowerCase()))
        tagsAppareils.push(e.appliance.toLocaleLowerCase())
        e.ustensils.forEach(ee=>
            tagsUstensiles.push(ee.toLocaleLowerCase()))
    })
    return [
        filtreDoublons(tagsIngredients),
        filtreDoublons(tagsAppareils),
        filtreDoublons(tagsUstensiles)
    ]
}

console.log(updateIngredients([recipes[0], recipes[1]]));
