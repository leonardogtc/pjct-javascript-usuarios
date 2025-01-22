const { preventOverflow } = require("@popperjs/core");

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};



console.log(user);


// Captura o clique de todos os eventos de botão
// document.querySelectorAll("button").forEach(function () {
    // this.addEventListener("click", function(){
    //     console.log("clicou!");
    // });
// });

// document.getElementById('form-user-create').addEventListener('submit', function(){
    // O console pisca rapidamente pois o botão submit executa refresh no formulário
    // após sua utilização...
    // console.log("Clicou no botão salvar!");
    // alert('Cliquei no botão Salvar!');

    // Cancelar o comportamento padrão do formulário
    // event.preventDefault();
    // console.log("Clicou no botão Salvar!");
// });

// Captura os dados do formulário
document.getElementById("form-user-create").forEach(function() {
    
    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name === "gender") {
    
            if (field.checked) {
                user[field.name] = field.value
            }
    
        } else {
    
            user[field.name] = field.value
    
        }
    
    });
});