/**
 * Nota:
 * Quando se utiliza um método como querySelector o mesmo realiza uma busca do DOM até encontrar o elemento,
 * e toda vez que é chamado refaz esse mesmo processo utilizando recursos de memória do navegador, o que pode
 * ser custoso devido ao hardware utilizado ou a quantidade de usuários acessando o mesmo processo. Portanto,
 * o ideal é que a variável ao invez de capturar o valor do elemento capture o próprio elemento.
 */
var nome = document.querySelector("#exampleInputName");

// Instanciar os campos do formulário

/**
 * Resolvendo o select
 * Para que o comando busque somente um select, o que estiver ativo, troca-se isto:
    var gender = document.querySelector("#exampleInputGenderM");
    var gender = document.querySelector("#exampleInputGenderF");
 */

var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

/**
 * Esse se tona uma instância podendo usar os métodos daquele elemento.
 */
nome.value = "Leonardo";
nome.style.color = "blue";

/**
 * Objetivo: Capturar os campos do formulário
 */
var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function (field, index) {

    // O console permite separar valores de mostragem na mesma linha
    console.log(field.id, field.name, field.value)

});

