const oneButton = document.querySelector(".one")

oneButton.addEventListener("click", (e) => {
    console.log("one")
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const twoButton = document.querySelector(".two")

twoButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const threeButton = document.querySelector(".three")

threeButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const fourButton = document.querySelector(".four")

fourButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const fiveButton = document.querySelector(".five")

fiveButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const sixButton = document.querySelector(".six")

sixButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const sevenButton = document.querySelector(".seven")

sevenButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const eightButton = document.querySelector(".eight")

eightButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const nineButton = document.querySelector(".nine")

nineButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const zeroButton = document.querySelector(".zero")

zeroButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const dotButton = document.querySelector(".dot")

dotButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    currentNumber(e.currentTarget.textContent)
})

const addButton = document.querySelector(".add")

addButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    
    // equation if empty 34
    // equation if not empty + 34

    //if(equationEl.textContent === ""){
    //    equationEl.textContent = numEl.textContent + " + "
    //    screenVisual = 0
    //    numEl.textContent = 0
    //} else {
    //    equationEl.textContent = equationEl.textContent + " + " + numEl.textContent + " + "
    //    screenVisual = 0
    //    numEl.textContent = 0
    //}

    if (numEl.textContent !== "0"){
        equationEl.textContent += numEl.textContent + " + "
        numEl.textContent = 0
        screenVisual = 0
    }

    if (numEl.textContent === "0"){
        let str = equationEl.textContent.split(" ")
        str.pop()
        str.pop()
        equationEl.textContent = str.join(" ") + " + "
    }

   
})

const minusButton = document.querySelector(".minus")

minusButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)

    if (numEl.textContent !== "0"){
        equationEl.textContent += numEl.textContent + " - "
        numEl.textContent = 0
        screenVisual = 0
    }

    if (numEl.textContent === "0"){
        let str = equationEl.textContent.split(" ")
        str.pop()
        str.pop()
        equationEl.textContent = str.join(" ") + " - "
    }

 
})

const divideButton = document.querySelector(".divide")

divideButton.addEventListener("click", (e)=> {
    console.log(e.currentTarget.textContent)
   if (numEl.textContent !== "0"){
        equationEl.textContent += numEl.textContent + " / "
        numEl.textContent = 0
        screenVisual = 0
    }

    if (numEl.textContent === "0"){
        let str = equationEl.textContent.split(" ")
        str.pop()
        str.pop()
        equationEl.textContent = str.join(" ") + " / "
    }

})

const multiplyButton = document.querySelector(".multiply")

multiplyButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    if (numEl.textContent !== "0"){
        equationEl.textContent += numEl.textContent + " * "
        numEl.textContent = 0
        screenVisual = 0
    }


    if (numEl.textContent === "0"){
        let str = equationEl.textContent.split(" ")
        str.pop()
        str.pop()
        equationEl.textContent = str.join(" ") + " * "
    }

    
})

const equalButton = document.querySelector(".equal")

equalButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    let a = equationEl.textContent + numEl.textContent * 1.0
   
    console.log(a)

    numEl.textContent = safeCalc(a)

    equationEl.textContent = ""
    
  
})

const safeCalc = (str) => {
  const sanitized = str.replace(/[^0-9+\-*/().\s]/g, '');
  return new Function(`return ${sanitized}`)();
};

const resetButton = document.querySelector(".reset")

resetButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    screenVisual = 0
    equationEl.textContent = ""
    numEl.textContent = screenVisual
   
})

const backspaceButton = document.querySelector(".backspace")

backspaceButton.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent)
    screenVisual = screenVisual.slice(0, -1)
    if(screenVisual === ""){
        screenVisual = 0
    }
    numEl.textContent = screenVisual
})
const numEl = document.querySelector(".num")

const equationEl = document.querySelector(".equation")

let screenVisual = 0

function currentNumber(num){
    if(screenVisual !== 0){
        screenVisual += "" + num
    } else {
        screenVisual = num
    }

    numEl.textContent = screenVisual
}

