// algorithmes de tri 
let recettesMAJ = []

// tri à partir de la recherche principale
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
    return filtreDoublons(tableauApresTri)
}

// tri à partir des ingrédients
// input : str qui est le li.textContent d'une seule suggestion
// str qui est la catégorie du filtre
// arr qui est la liste de recettes à l'avancement précédant la fonction
// output : arr la liste de recette 'recettesMAJ' mise à jour avec
// les éléments répondant au critère du filtre
function triFiltres(textContentUneLi, categorieFiltre, recettesMAJ) {
    let tableauApresTri = []
    if (categorieFiltre == 'tagIngredients') {
        recettesMAJ.forEach((e, ind) => {
            e.ingredients.forEach((elem,i) => {
                if (elem.ingredient.toLocaleLowerCase().includes(textContentUneLi)) {
                    tableauApresTri.push(e)
                }
            })
        })
    } else if (categorieFiltre == 'tagAppareils') {
        recettesMAJ.forEach((e) => {
            if (e.appliance.toLocaleLowerCase().includes(textContentUneLi)) {
                tableauApresTri.push(e) 
            }
        })
    } else if (categorieFiltre == 'tagUstensiles') {
        recettesMAJ.forEach((e) => {
            e.ustensils.forEach(eleme => {
                if (eleme.toLocaleLowerCase().includes(textContentUneLi)) {
                    tableauApresTri.push(e)
                }
            })
        })
    } 
    recettesMAJ = [].concat(tableauApresTri)
    return recettesMAJ
}
// input : arr de recettes et str à rechercher dans les recettes
// output : arr de recettes MAJ en correspondance avec le str à rechercher
function triApresSuppressionTag(recettes, cible) {
    let tableauApresTri = []
    recettes.forEach(e => {
        if (e.name.toLocaleLowerCase().includes(cible)) {
            tableauApresTri.push(e)
        }  
        e.ingredients.forEach(elem => {
            if (elem.ingredient.toLocaleLowerCase().includes(cible)) {
                tableauApresTri.push(e)
            }
        })

        if (e.appliance.toLocaleLowerCase().includes(cible)) {
            tableauApresTri.push(e)
        }  

        // instruction ci-dessous donne de plus amples résultats
        // que le tri sur les filtres : flou au niveau des consignes des cas 
        // d'utilisation, à conserver pour éventuelle MAJ post-soutenance
        // if (e.description.toLocaleLowerCase().includes(cible)) {
        //     tableauApresTri.push(e) 
        // }
        e.ustensils.forEach(eleme => {
            if (eleme.toLocaleLowerCase().includes(cible)) {
                tableauApresTri.push(e)
            }
        })
    })
    recettesMAJ = [].concat(filtreDoublons(tableauApresTri))
    return recettesMAJ
}

// input : arr de recettes et str à rechercher dans les ingrédients
// output : arr de recettes MAJ en correspondance avec le str à rechercher
function triTagIngredients(recettes, cible) {
    let tableauApresTri = []
    let tableauAffichageSeulementAvecDoublons = []
    recettes.forEach(e => {
        e.ingredients.forEach(elem => {
            if (elem.ingredient.toLocaleLowerCase().includes(cible)) {
                tableauApresTri.push(e)
                tableauAffichageSeulementAvecDoublons.push(elem.ingredient.toLocaleLowerCase())
            }
        })
    })
    let tableauAffichageSeulement = filtreDoublons(tableauAffichageSeulementAvecDoublons)
    return tableauAffichageSeulement
}

// input : arr de recettes et str à rechercher dans les appareils
// output : arr de recettes MAJ en correspondance avec le str à rechercher

function triTagAppareils(recettes, cible) {
    let tableauApresTri = []
    let tableauAffichageSeulementAvecDoublons = []
    recettes.forEach(e => {
        if (e.appliance.toLocaleLowerCase().includes(cible)) {
            tableauApresTri.push(e)
            tableauAffichageSeulementAvecDoublons.push(e.appliance.toLocaleLowerCase())
        }  
    })
    let tableauAffichageSeulement = filtreDoublons(tableauAffichageSeulementAvecDoublons)
    return tableauAffichageSeulement
}

function triTagUstensiles(recettes, cible) {
    let tableauApresTri = []
    let tableauAffichageSeulementAvecDoublons = []
    recettes.forEach(e => {
        e.ustensils.forEach(eleme => {
            if (eleme.toLocaleLowerCase().includes(cible)) {
                tableauApresTri.push(e)
                tableauAffichageSeulementAvecDoublons.push(eleme.toLocaleLowerCase())
            }
        })
    })
    let tableauAffichageSeulement = filtreDoublons(tableauAffichageSeulementAvecDoublons)
    return tableauAffichageSeulement
}

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
