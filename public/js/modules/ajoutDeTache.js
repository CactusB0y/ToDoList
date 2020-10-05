export let leCorps = document.getElementsByTagName('body')[0];
export let inputAdd = document.getElementById('inputAdd');
export let btnAdd = document.getElementById('btnAddHere');
export let divStockTask = document.getElementById('placeHere');
export let divWithTask;
export let spanWithTask;
export let divCol10;
export let divCol2;
export let btnCol2;


//création d'une tache
btnAdd.addEventListener('click', ()=>{
    if (inputAdd.value != ""){
        divWithTask = document.createElement('div');
        divWithTask.setAttribute('class', 'row modifWithTask py-5 my-5');
        divWithTask.setAttribute('style', 'background-color: white');
        divWithTask.classList.add('encours');
        divStockTask.appendChild(divWithTask);
        divCol10 = document.createElement('div');
        divCol10.setAttribute('class', 'col-10 text-center');
        divWithTask.appendChild(divCol10);
        spanWithTask = document.createElement('span');
        spanWithTask.setAttribute('class', 'spanWithTask');
        spanWithTask.innerText = inputAdd.value;
        divCol10.appendChild(spanWithTask);
        divCol2 = document.createElement('div');
        divCol2.setAttribute('class', 'col-2 text-center d-flex flex-column');
        divWithTask.appendChild(divCol2);
        for (let i = 0; i < 3; i++) {
            btnCol2 = document.createElement('button');
            if (i == 0) {
                btnCol2.innerText = "validé";
            } else if (i == 1){
                btnCol2.innerText = "modifier";
                btnCol2.classList.add("jesus");
            } else {
                btnCol2.innerText = "supprimer";
            }
            btnCol2.setAttribute('class', 'btnWithTask');
            divCol2.appendChild(btnCol2);
            inputAdd.value = "";
        }  
    } 
})
//créationj d'un tache avec le bouton enter
leCorps.addEventListener('keydown', (e)=>{
    if(e.key == "Enter" && inputAdd.value != ""){
        divWithTask = document.createElement('div');
        divWithTask.setAttribute('class', 'row modifWithTask py-5 my-5');
        divWithTask.setAttribute('style', 'background-color: white');
        divWithTask.classList.add('encours');
        divStockTask.appendChild(divWithTask);
        divCol10 = document.createElement('div');
        divCol10.setAttribute('class', 'col-10 text-center');
        divWithTask.appendChild(divCol10);
        spanWithTask = document.createElement('span');
        spanWithTask.setAttribute('class', 'spanWithTask');
        spanWithTask.innerText = inputAdd.value;
        divCol10.appendChild(spanWithTask);
        divCol2 = document.createElement('div');
        divCol2.setAttribute('class', 'col-2 text-center d-flex flex-column');
        divWithTask.appendChild(divCol2);
        for (let i = 0; i < 3; i++) {
        btnCol2 = document.createElement('button');
            if (i == 0) {
            btnCol2.innerText = "validé";
            } else if (i == 1){
            btnCol2.innerText = "modifier";
            btnCol2.classList.add("jesus");
            } else {
            btnCol2.innerText = "supprimer";
            }
            btnCol2.setAttribute('class', 'btnWithTask');
            divCol2.appendChild(btnCol2);
            inputAdd.value = "";
            }
        }
})


