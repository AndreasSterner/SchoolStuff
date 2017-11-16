var txt = document.getElementById("inputAdd");
var add = document.getElementById("buttonAdd");
var list = document.getElementById("myList");
var info = document.getElementById("sessionInfo");
var clear = document.getElementById("clear");
add.addEventListener('click', createList);
clear.addEventListener('click', rensaListan);
// "När fönstret laddas"
window.addEventListener('load', startList);

$(document).ready(function() {
    $("#buttonAdd").click(function(event) {
        swal({
          title: 'Attention!',
          text: 'Added text to your list',
          type: 'success',
          confirmButtonColor: 'green',
          confirmButtonText: 'Got It!'
        });
      });

    $("#clear").click(function(event) {
      swal({
        title: 'Attention!',
        text: 'Your list has been cleared',
        type: 'warning',
        confirmButtonColor: '#dd8522',
        confirmButtonText: 'Got It!'
      });
    });
});

function startList() {

          // Kollar om det finns något i en localStorage med namnet "list"
         
    if (localStorage.getItem('list')) {           // Om det finns data i list, plockar den ut datan och sparar i variabeln data
                  
        var data = localStorage.getItem('list');           // Skriver ut i listan
                  
        list.innerHTML = data;     
    }     
    else {           // Annars skriver ut "Listan är tom"
                  
        list.innerHTML = "<li>Listan är tom</li>";     
    }     
    sessionStorage.setItem('info', '0');     
    info.innerHTML = '0 poster inskrivna denna session<br>';
}

function createList() {     
    if (localStorage.getItem('list')) {          
        var data = localStorage.getItem('list');           // Skapar ett localStorage med namnet "list" och stoppar in datan i den.
                  
        localStorage.setItem('list', data + '<li>' + txt.value + '</li>');          
        data = localStorage.getItem('list');          
        list.innerHTML = data;          
        txt.value = "";     
    }     
    else {          
        localStorage.setItem('list', '<li>' + txt.value + '</li>');          
        var data2 = localStorage.getItem('list');          
        list.innerHTML = data2;          
        txt.value = "";     
    }     
    if (sessionStorage.getItem('info')) {           //Number() plockar ut ett tal ur ett objekt, parseInt() hade också fungerat här
                  
        var antal = Number(sessionStorage.getItem('info'));          
        antal++;          
        sessionStorage.setItem('info', antal);          
        info.innerHTML = antal + ' poster inskrivna denna session<br>';     
    }     
    else {          
        sessionStorage.setItem('info', '1');          
        info.innerHTML = '1 post inskriven denna session<br>';     
    }
}

function rensaListan() {     
    localStorage.setItem('list', '');     
    list.innerHTML = "";     
    sessionStorage.setItem('info', '0');     
    info.innerHTML = '0 poster inskrivna denna session<br>';
}