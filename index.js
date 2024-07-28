var card1 = window.document.getElementById("card1")
var card2 = window.document.getElementById("card2")
var card3 = window.document.getElementById("card3")
var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireto")
var cards = window.document.getElementsByClassName("cards")

function Rolarparadireita(){
   card1.style="transform: translateX(50px);transition-duration:0.4s;"
    card1.style="display:none"
    card3.style = "display:flex"
    setaesquerda.style="display:flex"
    setadireita.style="display:none"
    
    

}
function Rolarparaesquerda(){
    card3.style="display:none"
    card1.style = "display:flex"
    setaesquerda.style="display:none"
    setadireita.style="display:flex"
}
