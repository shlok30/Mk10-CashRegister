const billAmt = document.querySelector("#input-amt")
const cashAmt = document.querySelector("#cash-given")
const calculateBtn = document.querySelector("#check")
const numberOfNotesTableValue = document.querySelectorAll(".number-of-notes")
console.log(numberOfNotesTableValue)
let changeAmt = 0
const denominations = [2000,500,100,20,10,5,1]
let denominationCounter = 0

calculateBtn.addEventListener("click",validateChange)

function validateChange(){
    if(parseInt(billAmt.value) > 0 && parseInt(cashAmt.value) >= parseInt(billAmt.value)){
        changeAmt = parseInt(cashAmt.value) - parseInt(billAmt.value)
        console.log("Coming here")
        document.querySelector("#change").innerHTML = `Change Amount is ${changeAmt}`
        calculateNotes()
    }
    else{
        document.querySelector("#change").innerHTML = "Not Valid Numbers"
    }
}

function calculateNotes(){
    let remainingAmt = changeAmt
    for(let i = 0 ; i < denominations.length ; i++){
        let numberOfNotes = Math.trunc(remainingAmt/denominations[i])
        numberOfNotesTableValue[i].innerHTML = numberOfNotes
        console.log("number of ",denominations[i]," notes are ",numberOfNotes)
        remainingAmt = remainingAmt%denominations[i]

    }
}const billAmt = document.querySelector("#input-amt")
const cashAmt = document.querySelector("#cash-given")
const calculateBtn = document.querySelector("#check")
const numberOfNotesTableValue = document.querySelectorAll(".number-of-notes")
console.log(numberOfNotesTableValue)
let changeAmt = 0
const denominations = [2000,500,100,20,10,5,1]
let denominationCounter = 0

calculateBtn.addEventListener("click",validateChange)

function validateChange(){
    if(parseInt(billAmt.value) > 0 && parseInt(cashAmt.value) >= parseInt(billAmt.value)){
        changeAmt = parseInt(cashAmt.value) - parseInt(billAmt.value)
        console.log("Coming here")
        document.querySelector("#change").innerHTML = `Change Amount is ${changeAmt}`
        calculateNotes()
    }
    else{
        document.querySelector("#change").innerHTML = "Not Valid Numbers"
    }
}

function calculateNotes(){
    let remainingAmt = changeAmt
    for(let i = 0 ; i < denominations.length ; i++){
        let numberOfNotes = Math.trunc(remainingAmt/denominations[i])
        numberOfNotesTableValue[i].innerHTML = numberOfNotes
        console.log("number of ",denominations[i]," notes are ",numberOfNotes)
        remainingAmt = remainingAmt%denominations[i]

    }
}