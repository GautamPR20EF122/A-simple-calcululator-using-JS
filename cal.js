let num1 = 8
let num2 = 2

let Num1 = document.getElementById("num1-el")
let Num2 = document.getElementById("num2-el")

Num1.textContent = num1
Num2.textContent = num2

let sum = document.getElementById("sum-el")
function Add(){
    let num3 = num1 + num2
    sum.innerText += " "+num3
}

function Subtract(){
    let num3 = num1 - num2
    sum.innerText += " "+num3
}

function Divide(){
    let num3 = num1 / num2
    sum.innerText += " "+num3
}

function Multiply(){
    let num3 = num1 * num2
    sum.innerText += " "+num3
}

function change(){
    Num1.innerText = null
    let contents = prompt()
    Num1.innerText = parseInt(contents)
    num1 = parseInt(contents)
}

function changes(){
    Num2.innerText = null
    let content = prompt()
    Num2.innerText = parseInt(content)
    num2 = parseInt(content)
}
