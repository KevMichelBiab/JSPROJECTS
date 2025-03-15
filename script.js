/* Let's target all the elements we need first*/
const calorieCounter = document.getElementById("calorie-counter");
console.log("calorie: " + calorieCounter);
const budget = document.getElementById("budget");
console.log("budget: " + budget);
const lunch = document.getElementById("lunch");
console.log("lunch: " + lunch);
const dinner = document.getElementById("dinner");
console.log("dinner: " + dinner);
const snacks = document.getElementById("snacks");
console.log("snacks: " + snacks);
const exercise = document.getElementById("exercise");
console.log("exercise: " + exercise);
const entryDropDown = document.getElementById("entry-dropdown");
console.log("entryDropDown: " + entryDropDown);
const addEntry = document.getElementById("add-entry");
console.log("addEntry: " + addEntry);
const clear = document.getElementById("clear");
console.log("clear: " + clear);
const output = document.getElementById("output");
console.log("output: " + output);

/*Now let's take care of invalid inputs entered by the user*/
function isInvalidInput(str){
    const regx = /\d+e\d+/i;
    str.match(regx);
}

/*Let's clean an input so that it is according to our rules*/
function cleanInput(str){
    const regx = /[+-\s]/g;
    str.replace(regx, '');
}

/*Let's code how we gonna add an entry*/
function addEntryElt(){
    const targetInputContainer = document.querySelector(`#${entryDropDown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for= "${entryDropDown.value}-${entryNumber}"-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropDown.value}-${entryNumber}-name" placeholder="Name"/>
    <label for= "${entryDropDown.value}-${entryNumber}-calories">Entry  ${entryNumber} calories</label>
    <input type="number" id="${entryDropDown.value}-${entryNumber}-calories">Entry 
    `
}


