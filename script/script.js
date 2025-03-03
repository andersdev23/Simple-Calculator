// função para adicionar os caracteres //

function addCaractere(caractere) {
    
    const display = document.querySelector('.display').value;

    document.querySelector('.display').value = display + caractere;

}

// Função para calcular os numeros //

function calculate() {

    const display = document.querySelector('.display').value;

    document.querySelector('.display').value = eval(display);
}

// função para inverter valores  //

function reverseBtn() {

    const display = document.querySelector('.display').value;

    document.querySelector('.display').value = display * -1;
}

// função para limpar os dados inseridos //

function clearBtn() {

    const display = document.querySelector('.display').value = "";
}