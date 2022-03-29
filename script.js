const UtentsListEmail = ['paolo@paolo.it','chiara@chiara.it','enrico@enrico.it'];
const UtentEmail = prompt('inserisci il tuo indirizzo email');
for (i=0;i<UtentsListEmail.length;i++){
    if(UtentEmail == UtentsListEmail[i]){
        let mex = "l'email è nella lista";
        document.querySelector(".messaggio").innerHTML = mex;
        break;
    } else if (UtentEmail != UtentsListEmail[i]) {
        let mex = "l'email non è nella lista";
        document.querySelector(".messaggio").innerHTML = mex;
    }
}
