
let body = document.querySelector('body');

let container = document.createElement('div');
container.classList.add('container');

body.append(container);


let row = document.createElement('div');
row.classList.add('row');

container.append(row);

let col = document.createElement('div');
col.classList.add('col-12');

row.append(col);

let calculator = document.createElement('div');
calculator.classList.add('calculator');

col.append(calculator);

let input = document.createElement('input')
input.setAttribute('type','text');
input.setAttribute('placeholder','0')
input.setAttribute('id','output-screen')

calculator.append(input);

let btn1 = document.createElement('button');
btn1.setAttribute('onclick','cl()');
btn1.innerText = 'CL';

calculator.append(btn1);


let btn2 = document.createElement('button');
btn2.setAttribute('onclick','del()');
btn2.innerText = 'DEL';

calculator.append(btn2);


let btn3 = document.createElement('button');
btn3.setAttribute('onclick','display(per)');
let per = btn3.innerText = '%';

calculator.append(btn3);


let btn4 = document.createElement('button');
btn4.setAttribute('onclick','display(divide)');
let divide = btn4.innerText = '/';

calculator.append(btn4);

let btn5 = document.createElement('button');
btn5.setAttribute('onclick','display(7)');
btn5.innerText = '7';

calculator.append(btn5);

let btn6 = document.createElement('button');
btn6.setAttribute('onclick','display(8)');
btn6.innerText = '8';

calculator.append(btn6);

let btn7 = document.createElement('button');
btn7.setAttribute('onclick','display(9)');
btn7.innerText = '9';

calculator.append(btn7);

let btn8 = document.createElement('button');
btn8.setAttribute('onclick','display(star)');
let star = btn8.innerText = '*';

calculator.append(btn8);

// let btn9 = document.createElement('button');
// btn9.setAttribute('onclick','display(4)');
// btn9.innerText = '4';

// calculator.append(btn9);

let btn10 = document.createElement('button');
btn10.setAttribute('onclick','display(4)');
btn10.innerText = '4';

calculator.append(btn10);

let btn11 = document.createElement('button');
btn11.setAttribute('onclick','display(5)');
btn11.innerText = '5';

calculator.append(btn11);

let btn12 = document.createElement('button');
btn12.setAttribute('onclick','display(6)');
btn12.innerText = '6';

calculator.append(btn12);

let btn13 = document.createElement('button');
btn13.setAttribute('onclick','display(minus)');
let minus = btn13.innerText = '-';

calculator.append(btn13);

let btn14 = document.createElement('button');
btn14.setAttribute('onclick','display(1)');
btn14.innerText = '1';

calculator.append(btn14);

let btn15 = document.createElement('button');
btn15.setAttribute('onclick','display(2)');
btn15.innerText = '2';

calculator.append(btn15);

let btn16 = document.createElement('button');
btn16.setAttribute('onclick','display(3)');
btn16.innerText = '3';

calculator.append(btn16);

let btn17 = document.createElement('button');
let plus = btn17.innerText = '+';
btn17.setAttribute('onclick','display(plus)');

calculator.append(btn17);

let btn18 = document.createElement('button');
btn18.setAttribute('onclick','display(dot)');
let dot = btn18.innerText = '.';

calculator.append(btn18);

let btn19 = document.createElement('button');
btn19.setAttribute('onclick','display(0)');
btn19.innerText = '0';

calculator.append(btn19);

let btn20 = document.createElement('button');
btn20.setAttribute('onclick','calculate()');
btn20.classList.add('equal');
btn20.innerText='=';

calculator.append(btn20);



// *************************************************************************************


let outputScreen = document.getElementById('output-screen')

function display(num) {

    outputScreen.value += num ;
}

function calculate(){

    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert("Invalid Enter")
    }
}

function cl(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

// window.addEventListener('keypress', (e)=>{
     
//     operator = ['+','-','*','/','%','.']
//      key = event.key;
//      code = event.code;

//      if(code.includes('Digit') || operator.includes('key') || code.includes(Numpad)){
        
//         outputScreen.value += key;
//      }

// })


// window.addEventListener('keypress', (e)=>{
//     console.log(e);
// })

// *************************************************************************************