const jour = document.getElementById("pinpin");
const info = document.getElementById("infos")
//let darkmod = true;  //par défaut à nuit

let background = document.querySelector("body");
//let text = document.querySelector(".ban-txt");
//let title = document.querySelector(".ban-title");
//let banner = document.querySelector(".baniere");
//let container = document.querySelectorAll(".my-card");
//console.log(container);
//let n = 0;
let banTitle = document.querySelector(".ban-title");


 jour.addEventListener('click', function(e){

    if(background.classList.contains("dark")){
        background.classList.remove("dark");
        background.classList.add("light");
        banTitle.style.color = "blue";
    }
    else {
        background.classList.remove("light");
        background.classList.add("dark");
        banTitle.style.color = "grey";
    }


    //  if(darkmod /*&& n == 0 */){

    //    darkmod = false;
    //      background.style.backgroundColor ="aliceblue";
    //      //background.classList.add("body-2");
    //      text.style.color ="#2c2f33";
    //      title.style.color ="#2c2f33";
    //      banner.style.backgroundColor ="#8f9de4";
    //      container.forEach(element => element.style.backgroundColor ="#cbc8de");
    //      //container.style.backgroundColor ="#cbc8de";
    //  //n = 1;
    //  }
    // else {
    //     darkmod = true;
    //     console.log("nuit");
    //  background.style.backgroundColor ="#2c2f33";
    //  text.style.color = "aliceblue";
    //  title.style.color ="aliceblue"; 
    //  banner.style.backgroundColor ="#323c6c";
    // // n = 0;
    // }

// background.style.classList.toggle("aliceblue");
});


// jour.addEventListener('click', function() {
//     background.classList.toggle('body-yo'); 
// })


info.addEventListener('click', function(e){
  for( let i = 0; i<=1; i++){
  const p =document.createElement("p");
  const txt =document.createTextNode("Nom: BOSSE   Prénom: Enzo    mail: bosseenzo6@gmail.com   numéro: 06 13 86 55 78");
  p.appendChild(txt);
  
  const inf= document.querySelector(".inf");
  inf.appendChild(p);
  }
})



