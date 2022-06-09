var bg = document.getElementById("bg-body");
var inpt = document.getElementById("inpcolor");
var result = document.getElementById("resul-color");
var color ;

var defaultColor = "#111"
window.addEventListener("load", startup, false);

function startup() {
    color = document.querySelector("#inpcolor");
    color.value = defaultColor;
   color.addEventListener("input", updateFirst, false);
    colorl.addEventListener("change", updateAll, false);
   color.select();
  }
  function updateFirst(event) {
    var body = document.querySelector("body");
  
    if (body) {
      body.style.background = event.target.value;
     result.innerText="The Color Used is:"+" "+event.target.value
   var txtcolor = event.target.value
   txtcolor.style.color = event.target.value
      
    }
  }