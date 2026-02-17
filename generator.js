
let button= document.getElementById("generate");

button.addEventListener("click",gifgen)

function gifgen(){

  
  const img = document.createElement("img");
  img.src="https://media.tenor.com/xsn45ACZ1hwAAAAi/mob-psycho-100-mp100.gif";
  document.body.appendChild(img);


 }
