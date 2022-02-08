let disp= document.querySelector("#txt")
let head= document.querySelector("h1")
// head.style.color="red"
let display= (val)=>{
    disp.value += val;

}

const clr=()=>{
    disp.value="";
}

let Back=()=>{
   disp.value =disp.value.slice(0,-1)
}
let e=()=>{
    // eval(4+2) is a function to take care of bodmass operation
    let a = disp.value;
    let ans= eval(a);
    disp.value= ans;
    
   
}
let spc=()=>{
    
}
