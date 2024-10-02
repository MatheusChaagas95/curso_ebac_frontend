const form = document.getElementById ('form');

function validaValor(){
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener ('submit', function (event){
    event.preventDefault();

    const validou = validaValor();

    const inputA = document.getElementsByTagName('input')[0];   
    const inputB = document.getElementsByTagName('input')[1];
    inputA.value ='';
    inputB.value ='';

    if (validou) {
        const successmessage = document.getElementsByTagName('p')[0];
        successmessage.innerHTML = 'O Campo B é maior que o campo A';
        successmessage.style.display = 'block';
        successmessage.classList.add('success')

    } else {
        const errormessage = document.getElementsByTagName('p')[0];
        errormessage.innerHTML = 'O Campo B não é maior que o campo A';
        errormessage.style.display = 'block';
        errormessage.classList.add('error')
    }
})

const input1 = document.getElementById('campoA');
const input2 = document.getElementById('campoB');
const menssage01 = document.getElementsByTagName('p')[0];
const menssage02 = document.getElementsByTagName('p')[0];

input1.addEventListener('click', function(){
    menssage01.style.display ='none';
})

input2.addEventListener('click', function(){
    menssage02.style.display ='none';
})

