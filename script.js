let inputBox=document.getElementById("inputBox");

let btn=document.querySelectorAll("#symbol");
let string="";
let array = Array.from(btn);
btn.forEach((value , index , array)=>{
value.addEventListener('click' , (e)=>{
    if(e.target.value=='='){
        string=eval(string);
        inputBox.value=string;
    }
    else if(e.target.value=="AC"){
        string="";
        inputBox.value=string;
    }
    else if(e.target.value=="DE"){
        string=string.substring(0, string.length-1);
        inputBox.value=string;
    }
    else{
        string+=e.target.value;
        inputBox.value=string;
    }
 })
})
