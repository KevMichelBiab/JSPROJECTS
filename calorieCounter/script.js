const calorieCounter = document.getElementById("calorie-counter");
console.log("Calorie counter: " + calorieCounter);

const budget = document.getElementById("budget");
console.log("budget: " + budget);

const breakfast = document.getElementById("breakfast");
console.log("breakfast: " + breakfast);

const lunch = document.getElementById("lunch");
console.log("lunch: " + lunch);

const dinner = document.getElementById("dinner");
console.log("dinner: " + dinner);

const snacks = document.getElementById("snacks");
console.log("snacks: " + snacks);

const exercise = document.getElementById("exercise");
console.log("exercise: " + exercise);

const entryDropDown = document.getElementById("entry-dropdown");
console.log("entry drop down" + entryDropDown);

const output = document.getElementById("output");
console.log("output: " + output);


function isInvalidInput(str){
    const regx = /\d+e\d+/i;
    str.match(regx);
}

function cleanInputString(str){
    const regx = /[+-\s]/g;
    str.replace(regx, '');
}

function addEntry(){
    const targetInputContainer = document.querySelector(`#${entryDropDown.value} .input-container`);
    console.log("target input: " + targetInputContainer);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for= "${entryDropDown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
        type="number"
        min="0"
        id="${entryDropdown.value}-${entryNumber}-calories"
        placeholder="Calories"
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
    
}


