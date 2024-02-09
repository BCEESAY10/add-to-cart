//JS File
const addInput = document.getElementById("item-name");
const addButton = document.getElementById("add-btn");

addButton.addEventListener('click', ()=>{
    console.log(addInput.value);
});