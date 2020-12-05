let prix = document.querySelectorAll(".prix")
console.log(prix)

let produit = document.querySelectorAll(".ligne1")
console.log(produit)

let prixTotal = document.querySelector(".prix-total")
console.log(prixTotal)

let increase = document.querySelectorAll(".increase")
console.log(increase)

let deletes = document.querySelectorAll(".delete")
console.log(deletes)

let quant = document.querySelectorAll(".quant")
console.log(quant)

let decrease = document.querySelectorAll(".decrease")
update ()

for (let i =0  ; i < increase.length ;i++  ){
    increase[i].addEventListener("click", function(){
        quant[i].value ++ ; update ()
      
    })}

for (let i =0 ; i<deletes.length ; i++ ){
    deletes[i].addEventListener("click", function(){
        quant[i].value = 0 
        produit[i].remove(); 
        update ()

        
    })
}
for (let i =0  ; i < decrease.length ;i++  ){
    decrease[i].addEventListener("click", function(){
        
        quant[i].value --; update ()
    })}


function update (){
        let totalprice = 0 
        for (i = 0 ; i < quant.length ; i++){
            totalprice += quant[i].value * parseInt(prix[i].innerHTML)
           } 
           prixTotal.innerHTML = totalprice}
