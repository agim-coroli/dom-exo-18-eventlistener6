// 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.
let maDiv = document.getElementById("content")
let monP = document.getElementById("content").lastElementChild
let monT1 = document.getElementById("content").firstElementChild
let monT2 = document.getElementById("content").children[1]
let newT2;

addEventListener("click", (e)=>{
    if (e.target == maDiv) {
        maDiv.style.border = "red solid 5px"
    } else if (e.target == monP){
        monP.style.color = "red"
        monP.style.fontWeight = "bold"
    } else if (e.target == monT1){
        monT1.style.textDecoration = "overline"
    } else if (e.target == monT2){
        e.target.textContent = e.target.textContent.substring(0, e.target.textContent.length-1)
    }
})




// 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 
let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

let mySection = document.querySelector("section")
mySection.style.height = "10px"
let myP2 = mySection.firstElementChild
console.log(myP2);

mySection.addEventListener("mouseover", () =>{
    myP2.textContent = text;
})
mySection.addEventListener("mouseout", () =>{
    myP2.textContent = "";
})




// LE TRUC A PART 
let monPP = document.getElementsByTagName("p")[2]
let monP2 = document.getElementsByTagName("p")[3]
let btnReplace = document.querySelector("button")

let replace = (texteARemplacer, remplacant) => {
    texteARemplacer.innerText = remplacant.innerText;
}

// pour appeller une fonction avec des paramettre, je dois l'appeller dabor dans une fonction anonym, sinon elle se declanche instantanément

btnReplace.addEventListener("click", ()=>{
    replace(monP2, monP)
})