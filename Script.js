const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs(){
    const usernamevalue =username.value.trim();
    const emailvalue =email.value.trim();
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim();

    if(usernamevalue === ''){
        setErrorfor(username, 'Username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailvalue === ''){
        setErrorfor(email, 'Email cannot be blank');
    }else if(!isEmail(emailvalue)){
        setErrorfor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    if(passwordvalue === ''){
        setErrorfor(email, 'Email cannot be blank');
    }else{
        setSuccessFor(email);
    }

}

function setErrorfor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText=message;

    formcontrol.className= 'form-control error';
} 

function setSuccessFor(input){
    const formcontrol = input.parentElement;  // .form-control

    // add success class
    formcontrol.className = 'form-control success';
}

function isEmail(email){
    return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}