let para=document.getElementById("para");
let txt=document.getElementById("txt");

document.addEventListener("keydown",(e)=>{
    let x=e.key;
   
    txt.style.marginTop="-3rem"
    if(e.ctrlKey){
        txt.innerText="You pressed ctrl + "+x;
        para.innerText=e.keyCode;

    }else if(e.keyCode==32){
        txt.innerText="You pressed Backspace";
        para.innerText=e.keyCode;
    }else{
        txt.innerText="You pressed "+x;
        para.textContent=e.keyCode;
    }
    para.style.display="block";
});