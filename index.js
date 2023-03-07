var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll(".dice img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="	&#128681Player1! win";
}
else if(randomNumber1==randomNumber2){
    document.querySelector(".container h1").innerHTML="Draw!&#127884";
   
}
else{
    document.querySelector(".container h1").innerHTML="Player2 win!&#128681";
}