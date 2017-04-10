(function(){
var popupElement = document.getElementById('popup');
var redirectWebsite = 'https://telerikacademy.com/';

var promise = new Promise(function(resolve, reject){    
    setTimeout(function() {
        resolve(redirectWebsite);
    }, 2000);
})

function displayMessage(){
    popupElement.innerHTML = "This page will redirect you to Telerik Academy homepage";
}

function redirectBrowser(){
   return new Promise(function (resolve, reject){
       setTimeout(function() {
        resolve(window.location = redirectWebsite);
    }, 2000);
   }) 
}

promise
    .then(displayMessage)
    .then(redirectBrowser);
}())