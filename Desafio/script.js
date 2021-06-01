



// vai aparecer um alerta na tela, porque vou chamar a função alert do javascript:

function validaCPF(cpf) {
    document.getElementById('accept').style.display = 'none';
    document.getElementById('fail').style.display = 'none';
    document.getElementById('incompleto').style.display = 'none';
    document.getElementById('invalido').style.display = 'none';



    if (cpf.length != 11) {
        document.getElementById('incompleto').style.display = 'block';
        return false;
    }
    else {

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        console.log("Numeros",numeros);
        console.log("Digitos",digitos);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            console.log("Valor1");
            console.log(typeof(numeros.charAt(10 - i)), numeros.charAt(10 - i));
            console.log(typeof(i), i);
            soma += numeros.charAt(10 - i) * i;
        }

        
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        console.log("RESULTADO", resultado);
        console.log("1º Digito",  digitos.charAt(0)*1);
        console.log("Tipo - 1º Digito",  typeof(digitos.charAt(0)*1));

        // validação do primeiro digito

        if (resultado != digitos.charAt(0)*1) {
            console.log("è diferente");
            document.getElementById('invalido').style.display = 'block';
            return false;

        }
        
        console.log(
            digitos.toString().charAt(0) + ' é a primeira posição da variavel soma'
        );

        soma = 0;        

        
        numeros = cpf.substring(0, 10);
        console.log("Numeros", numeros);

        for ( var k = 11; k > 1; k--) {
            console.log("Valor2");
            console.log(typeof(numeros.charAt(11 - k)), numeros.charAt(11 - k));
            console.log(typeof(k), k);
            soma += numeros.charAt(11 - k) * k;
        }
        console.log(soma);

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        console.log("RESULTADO", resultado);
        console.log("2º Digito",  digitos.charAt(1)*1);
        console.log("Tipo - 2º Digito",  typeof(digitos.charAt(1)*1));


        //Validação do segundo digito

        if (resultado != digitos.charAt(1)*1){
            document.getElementById('invalido').style.display = 'block';
            return false;
        }

        console.log("Valido Válido!");


        return true;
    }

}

function validacao() {
    console.log('Iniciando validação CPF');

    document.getElementById('accept').style.display = 'none';
    document.getElementById('fail').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadovalidacao = validaCPF(cpf);

    if (resultadovalidacao == true) {      // mesmo se não colocar == true, o programa entende
        document.getElementById('accept').style.display = 'block';
    }
    else {
        document.getElementById('fail').style.display = 'block';
    }

    return resultadovalidacao


}
function validateForm() {

    checkvalidation = false //Esse é o correto -> true

    //Padrões UI

    var erro_obrigatorio = "Campo Obrigatório*"
    var erro_style = "red"

    // Objeto principal

    var pessoa = {} // criando um objeto Json


    // Capturando Dados
    // Capturando valor do input id=nome Inputsobrenome

    pessoa["nome"] = document.forms["cadastroForm"]["Inputnome"].value;
    pessoa["sobrenome"] = document.forms["cadastroForm"]["Inputsobrenome"].value;
    pessoa["cpf"] = document.forms["cadastroForm"]["cpf_digitado"].value
    pessoa["celular"] = document.forms["cadastroForm"]["Inputcelular"].value;
    pessoa["rua"] = document.forms["cadastroForm"]["Inputrua"].value;
    pessoa["numero"] = document.forms["cadastroForm"]["Inputnumero"].value;
    pessoa["cep"] = document.forms["cadastroForm"]["Inputcep"].value;

    // Captura de Labels - erros

    var labelnome = document.getElementById("labelnome");
    var labelsobrenome = document.getElementById("labelsobrenome");
    var labelcpf = document.getElementById("labelcpf");
    var labelcelular = document.getElementById("labelcelular");
    var labelrua = document.getElementById("labelrua");
    var labelnumero = document.getElementById("labelnumero");
    var labelcep = document.getElementById("labelcep");


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

    
    //Validação CPF

    if (pessoa["cpf"]) {
        checkvalidation = validacao()
    } else {
        labelcpf.innerText = erro_obrigatorio
        labelcpf.style.color = erro_style
        checkvalidation = false
    }

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

    if (pessoa["cep"]) {

    } else {
        labelcep.innerText = erro_obrigatorio
        labelcep.style.color = erro_style
        checkvalidation = false
    }
    
    


    //Validação Email

    console.log("Pessoa: ", pessoa);

    console.log("Teste form: ", checkvalidation);

    if (!checkvalidation) {
        alert("Formulário Inválido, verifique as informações e tente novamente!!!")
    }

    else {alert("Formulário registrado com sucesso, obrigado por se cadastrar!!!")



    }

    console.log("Terminou a função");
    console.log("Valor do Check", checkvalidation);
    return checkvalidation

}