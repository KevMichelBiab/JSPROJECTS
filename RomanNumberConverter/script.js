const numberInput = document.getElementById("number");
console.log("Number input: " + numberInput);

const convertBtn = document.getElementById("convert-btn");
console.log("Button value: " + convertBtn);

const output = document.getElementById("output");
console.log("Output value: " + output);




convertBtn.addEventListener("click", () => {
    if(!numberInput.value){
        output.textContent = "Please enter a valid number";
    }

    if(parseInt(numberInput.value) < 1){
        output.textContent = "Please enter a number greater than or equal to 1"

    }

    if(parseInt(numberInput.value) > 4000){
        output.textContent = "Please enter a number less than or equal to 3999";
    }

    if(parseInt(numberInput.value) === 9){
        output.textContent = "XVI";
    }
})
