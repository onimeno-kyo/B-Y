let nomInput = document.querySelector("[name='nom']");
let prenomInput = document.querySelector("[name='prenom']");
let emailInput = document.querySelector("[name='email']");
let messageInput = document.querySelector("[name='message']");
document.forms[0].onsubmit = function(e){
    let nomValid = false;
    let prenomValid = false;
    let emailValid = false;
    let messageValid = false;
    if(nomInput.value !== ""){
        nomValid = true;
    }
    if(prenomInput.value !== ""){
        prenomValid = true;
    }
    if(emailInput.value !== ""){
        emailValid = true;
    }
    if(messageInput.value !== ""){
        messageValid = true;
    }
    if(nomValid === false || prenomValid === false || emailValid ===false || messageValid=== false){
        e.preventDefault();
    }
};
/*
let nomInput = document.querySelector("[name='nom']");
let prenomInput = document.querySelector("[name='prenom']");
let emailInput = document.querySelector("[name='email']");
let messageInput = document.querySelector("[name='message']");
let dateInput = document.querySelector("[name='date-de-naissance']");
let numeroInput = document.querySelector("[name='numero']");
let niveauInput = document.querySelector("[name='Niveau-d'ancienneté']");
let emploiInput = document.querySelector("[name='type-d'emploi']");
let fonctionInput = document.querySelector("[name='fonction-professionnelle']");
let industrieInput = document.querySelector("[name='industrie']");
document.forms[0].onsubmit = function(e){   
    let nomValid = false;
    let prenomValid = false;
    let emailValid = false;
    let messageValid = false;
    let numeroValid = false;
    let niveauValid = false;
    let emploiValid = false;
    let fonctionValid = false;
    let industrieValid = false;
    if(nomInput.value !== ""){
        nomValid = true;
    }
    if(prenomInput.value !== ""){
        prenomValid = true;
    }
    if(emailInput.value !== ""){
        emailValid = true;
    }
    if(messageInput.value !== ""){
        messageValid = true;
    }
    if(numeroInput.value !== ""){
        numeroValid = true;
    }
    if(niveauInput.value !== ""){
        niveauValid = true;
    }
    if(emploiInput.value !== ""){
        emploiValid = true;
    }
    if(fonctionInput.value !== ""){
        fonctionValid = true;
    }
    if(industrieInput.value !== ""){
        industrieValid = true;
    }
    if(nomValid === false || prenomValid === false || emailValid ===false || messageValid=== false || numeroValid=== false || niveauValid=== false || emploiValid=== false || fonctionValid=== false || industrieValid=== false){
        e.preventDefault();
    }
};*/