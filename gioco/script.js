const ComputerNumero = Math.floor(Math.random() * 6 ) + 1;
console.log(ComputerNumero)
const UtentNumero = Math.floor(Math.random() * 6 ) + 1;
console.log(UtentNumero)
if (ComputerNumero>UtentNumero){
    let mex = "hai perso";
    document.getElementById("win").innerHTML = mex;
} else if(ComputerNumero<UtentNumero){
    let mex = "hai vinto";
    document.getElementById("win").innerHTML = mex;
}else{
    let mex = "pareggio";
    document.getElementById("win").innerHTML = mex;
}