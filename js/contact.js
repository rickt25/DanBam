const form = document.querySelector("form");
const usernameValue = document.getElementById('username');
const email = document.getElementById('email');
const messages = document.getElementById('messages');

form.addEventListener("submit" ,(e) => {
    e.preventDefault();

    // console.log("here");

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messagesValue = messages.value.trim();
    
    if(usernameValue === ''){
        setError(username, 'Name cannot be empty!');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be empty!');
    }else if(!validateEmail(emailValue)){
        setError(email, 'Email is not valid!');
    }else{
        setSuccess(email);
    }

    if(document.getElementById('male').checked || document.getElementById('female').checked){
        setSuccess(male);
    }else{
        setError(male, 'Gender must be between Male of Female!');
    }

    if(document.getElementById('branch').value == ""){
        setError(branch, 'Must choose a branch!');
    }else{
        setSuccess(branch);    
    }

    if(messagesValue === ''){
        setError(messages, 'Message cannot be empty!');
    }else if(messagesValue.length < 10){
        setError(messages, 'Message cannot be less than 10 characters!');
    }else if(messagesValue.length > 100){
        setError(messages, 'Message cannot be more than 100 characters!');
    }else{
        setSuccess(messages);
    }

}

function setError(inputs, message){
    const formControl = inputs.parentElement.parentElement;
    
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(inputs){
    const formControl = inputs.parentElement.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(input) {
    var atSymbol = input.indexOf("@");
    var dot = input.indexOf(".");
    if(atSymbol < 1 || dot <= atSymbol + 2 || dot === input.length - 1){
        return false;
    }
    return true;
}