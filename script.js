const UtentsEmailList = ['ciao@ciao.it', 'paolo@paolo.it', 'riccardo@riccardo.it'];
let UtentEmail = document.getElementById('mail');
const BottoneVerifica = document.querySelector('.btn-danger');
let email = false; 

function VerificationEmail(){
    for(i=0;i<=UtentsEmailList.length;i++){
       if(UtentEmail.value === UtentsEmailList[i]){
            email = true;
       } else {
            document.getElementById('answer').innerHTML = 'accesso negato';
       }
    }
    if (email){
        document.getElementById('answer').innerHTML = 'accesso consentito';
    }
}

BottoneVerifica.addEventListener('click', VerificationEmail);

