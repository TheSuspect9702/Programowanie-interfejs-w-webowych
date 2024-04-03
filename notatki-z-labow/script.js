"use strict"
//function adder2 () {}
let zmienna;
var innaZmienna;

//najlepsza opcja podobno xD
const adder = () => {
    const inputA = document.getElementById("num-a");
    const inputB = document.querySelector("#num-b");

    console.log({inputA}); // wypisuje obiekt

    let value = inputA.value;
    if(value === ""){
        console.log("A jest puste");
        return;
    }

    const numberA = Number(inputA.value);
    const numberB = Number(inputB.value);
    if(isNaN(numberA) || isNaN(numberB)){
        console.log("A lub B nie jest liczbą");
        const modal = document.getElementById("omg");
        modal.showModal();

        const closingButton = document.getElementById("omg-close");

        closingButton.addEventListener("click", ()=>{
            modal.close();
        });


        return;
    }
    console.log(`${numberA} + ${numberB} = ${numberA + numberB}`);

    const resultsList = document.getElementById("results-list");

    const listItem = document.createElement("li");
    listItem.innerText = `${numberA} + ${numberB} = ${numberA + numberB}`;

    listItem.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "red";
    })

    resultsList.appendChild(listItem);
}

window.onload = ()=> {
    const modal = document.getElementById("omg");

    const closingButton = document.getElementById("omg-close");

    closingButton.addEventListener("click", ()=>{
        modal.close();
    });
}