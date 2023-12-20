const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

//metodo para asignarle al atributo "btn = btnCalcular" (boton), la funcion creada btnOnClick
btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs=input1.value+input2.value;
    //metodo para sumar numeros y que no los concatene
    //const sumaInputs=Number(input1.value)+Number(input2.value);
    pResult.innerText="Resultado: "+sumaInputs;}