function validaCPF(cpf); {
    if (cpf.length != 11) {
        return false;
    }
    else {

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);


        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }


        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;

        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        //Validação do segundo digito
        if (resultado != digitos.charAt(1)); {
            return false;
        }
        return true;
    }

}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('accept').style.display = 'none';
    document.getElementById('fail').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadovalidacao = validaCPF(cpf);

    if (resultadoValidacao == true) {      // mesmo se não colocar == true, o programa entende
        document.getElementById('accept').style.display = 'block';
    }
    else {
        document.getElementById('fail').style.display = 'block';
    }



}
function validateForm() {

    checkvalidation = false //true

    //Padrões UI
    var erro_obrigatorio = "Campo Obrigatório*"
    var erro_style = "red"

    // Objeto principal
    var pessoa = {} // criando um objeto Json


    // Capturando Dados
    // Capturando valor do input id=nome Inputsobrenome
    pessoa["nome"] = document.forms["cadastroForm"]["Inputnome"].value;
    pessoa["sobrenome"] = document.forms["cadastroForm"]["Inputsobrenome"].value;
    //
    // cpf
    //
    pessoa["celular"] = document.forms["cadastroForm"]["Inputcelular"].value;
    pessoa["rua"] = document.forms["cadastroForm"]["Inputrua"].value;
    pessoa["numero"] = document.forms["cadastroForm"]["Inputnumero"].value;

    // Captura de Labels - erros
    var labelnome = document.getElementById("labelnome");
    var labelsobrenome = document.getElementById("labelsobrenome");
    //cpf
    var labelcelular = document.getElementById("labelcelular");
    var labelrua = document.getElementById("labelrua");
    var labelnumero = document.getElementById("labelnumero");



    // Grupos de validação obrigatoria
    // Nome
    if (pessoa["nome"]) { //caso seja igual a "", false

    } else {
        labelnome.innerText = erro_obrigatorio
        labelnome.style.color = erro_style
        checkvalidation = false
    }

    if (pessoa["sobrenome"]) {

    } else {
        labelsobrenome.innerText = erro_obrigatorio
        labelsobrenome.style.color = erro_style
        checkvalidation = false
    }

    // Validação CPF
    ////
    ///

    if (pessoa["celular"]) {

    } else {
        labelcelular.innerText = erro_obrigatorio
        labelcelular.style.color = erro_style
        checkvalidation = false
    }

    if (pessoa["rua"]) {

    } else {
        labelrua.innerText = erro_obrigatorio
        labelrua.style.color = erro_style
        checkvalidation = false
    }

    if (pessoa["numero"]) {

    } else {
        labelnumero.innerText = erro_obrigatorio
        labelnumero.style.color = erro_style
        checkvalidation = false
    }


    //Validação Email

    console.log("Pessoa: ", pessoa);

    console.log("Teste form: ", checkvalidation);

    if (!checkvalidation) {
        alert("Formulário Inválido, verifique as informações e tente novamente!!!")
    }

    console.log("Terminou a função");
    console.log("Valor do Check", checkvalidation);
    return checkvalidation

}