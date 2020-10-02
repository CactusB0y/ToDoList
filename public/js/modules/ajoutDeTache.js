export let leCorps = document.getElementsByTagName('body')[0];
export let inputAdd = document.getElementById('inputAdd');
export let btnAdd = document.getElementById('btnAddHere');
export let divStockTask = document.getElementById('placeHere');
export let divWithTask;
export let spanWithTask;



btnAdd.addEventListener('click', ()=>{
    divWithTask = document.createElement('div');
    divStockTask.appendChild(divWithTask)
    divWithTask.innerText = inputAdd.value
    inputAdd.value = "";
})

leCorps.addEventListener('keydown', (e)=>{
    if(e.key == "Enter"){
        divWithTask = document.createElement('div');
        divStockTask.appendChild(divWithTask)
        divWithTask.innerText = inputAdd.value
        inputAdd.value = "";
    }
})



console.log(inputAdd);
console.log(btnAdd);