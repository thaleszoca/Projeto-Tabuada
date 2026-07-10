var botao = document.querySelector('input#botao')
botao.addEventListener('click', gerar)

function gerar () {
    var inputTabuada = document.querySelector('input#inputTabuada')
    var textarea = document.querySelector('textarea#textarea')
    var numero = Number(inputTabuada.value)
    var inicio = 1

    if (inputTabuada.value.length == 0) {
        window.alert('[ERRO] Digite um valor e tente novamente.')
    }

    else if (numero < 0) {
        textarea.value = ''
        for (var contador = numero; contador >= numero*10; contador += numero) {
            textarea.value += `${numero} x ${inicio++} = ${contador}\n`
        }
    }

    else {
        textarea.value = ''
        for (var contador = numero; contador <= numero*10; contador += numero) {
            textarea.value += `${numero} x ${inicio++} = ${contador}\n`
        }
    }
}
