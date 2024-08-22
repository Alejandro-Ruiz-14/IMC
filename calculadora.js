window.onload = iniciar;

function iniciar(){
    let BtnCalcular = document.getElementById('BtnCalcular');
    BtnCalcular.addEventListener('click', clickBtnCalcular);
}

function clickBtnCalcular(){
    let txtPeso = document.getElementById('txtPeso');
    let peso = txtPeso.value;

    let txtAltura = document.getElementById('txtAltura');
    let altura = txtAltura.value; 

    let imc = peso / (altura * altura);

    alert("Tu IMC es: " + Math.round(imc));
}
