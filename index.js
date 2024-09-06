const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const num3 = document.getElementById("3")
const num4 = document.getElementById("4")
const num5 = document.getElementById("5")
const num6 = document.getElementById("6")
const num7 = document.getElementById("7")
const num8 = document.getElementById("8")
const num9 = document.getElementById("9")
const add = document.getElementById("+")
const sub = document.getElementById("-")
const multiply = document.getElementById("*")
const equalTo = document.getElementById("=")
let outputValue = document.getElementById("0")
let output = 0
let action
let outputData
num1.addEventListener("click",(event)=>{
    output = output + num1.textContent
})
num2.addEventListener("click",(event)=>{
    output = output + num2.textContent
})
num3.addEventListener("click",(event)=>{
    output = output + num3.textContent
})
num4.addEventListener("click",(event)=>{
    output = output + num4.textContent
})
num5.addEventListener("click",(event)=>{
    output = output + num5.textContent
})
num6.addEventListener("click",(event)=>{
    output = output + num6.textContent
})
num7.addEventListener("click",(event)=>{
    output = output + num7.textContent
})
num8.addEventListener("click",(event)=>{
    output = output + num8.textContent
})
num9.addEventListener("click",(event)=>{
    output = output + num9.textContent
})
add.addEventListener("click",(event)=>{
    action = "+"
    outputData = outputData?(parseInt(outputData)+parseInt(output)):parseInt(output)
    output = 0
})
sub.addEventListener("click",(event)=>{
    action = "-" 
    outputData = outputData?(parseInt(outputData)-parseInt(output)):parseInt(output)
    output = 0
})
multiply.addEventListener("click",(event)=>{
    action = "*"
    outputData = outputData?(parseInt(outputData)*parseInt(output)):parseInt(output)
    output = 0
})
equalTo.addEventListener("click",(event)=>{
    let outputDataInt = parseInt(outputData)
    let outputInt = parseInt(output)
    let finalOutput = outputData?eval(`${outputDataInt} ${action} ${outputInt}`):parseInt(output)
    outputData = finalOutput
    outputValue.value = outputData
    output = 0
})
