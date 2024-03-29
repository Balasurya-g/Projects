function fun(str){
let dd = Math.random();
let userinput=str;
console.log(userinput);

function computer(){
if(dd >= 0 && dd < 0.33){
    return "ROCK";
}
else if(dd >=0.33 && dd < 0.66){
    return "PAPPER";
}
else if(dd >= 0.66 && dd <= 1){
    return "SCISSOR";
}
}
console.log(computer())
let computerinput=computer();
document.getElementById("output").textContent=computerinput;
if(userinput===computerinput){
    document.getElementById("display").textContent="TIE.";
}
else{
    if(userinput==="ROCK")
    {
        if(computerinput==="PAPPER"){
            document.getElementById("display").textContent="YOU LOOSE";       
        }
        else{
            document.getElementById("display").textContent="YOU WIN";
            
        }
    }
    else if(userinput==="PAPPER" )
    {
        if(computerinput==="ROCK"){
            document.getElementById("display").textContent="YOU WIN";
        }
        else{
            document.getElementById("display").textContent="YOU LOOSE";
            
        }
    }
    else{
        if(computerinput==="ROCK"){
            document.getElementById("display").textContent="YOU LOOSE";
            
        }
        else{
            document.getElementById("display").textContent="YOU WIN";
            

        }
    }
}

}
