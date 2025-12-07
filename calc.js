let justCalculated = false;

const input=document.querySelector("#display");
function clearDisplay(){
   input.value="";
}
function deleteLast(){
   
   input.value= input.value.toString().slice(0,-1);
}
addEventListener("keydown",(e)=>{
if (e.key==='Backspace'){
    deleteLast();
}
})

function append(e){
      if (justCalculated===true) {
        input.value = "";
        justCalculated = false;
    }
 if (e === "*" || e === "/" || e === "-" || e === "+"){
      input.value+=" "+e+" ";
  }
  else{
      input.value+=e;
  }
}
function calculateResult(){
    input.value=eval(input.value);
    justCalculated = true;
}


