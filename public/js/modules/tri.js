import { divStockTask } from "./ajoutDeTache.js";
import {  } from "./validSuppModif.js";

export let btnFini = document.getElementById('fin');
export let btnEncours = document.getElementById('cours');
export let btnTous = document.getElementById('tous');
export let elemFini = document.getElementsByClassName('fini');
export let elemEncours = document.getElementsByClassName('encours')
let tabElemFini;
let tabElemEncours;

btnFini.addEventListener('click', ()=>{
    tabElemEncours = Array.from(elemEncours);
    tabElemFini = Array.from(elemFini);
    tabElemEncours.forEach(ele => {
        ele.classList.add('ninja');
    });
    tabElemFini.forEach(el => {
        el.classList.remove('ninja');
    });
})

btnEncours.addEventListener('click', ()=>{
    tabElemEncours = Array.from(elemEncours);
    tabElemFini = Array.from(elemFini);
    tabElemEncours.forEach(ele => {
        ele.classList.remove('ninja');
    });
    tabElemFini.forEach(el => {
        el.classList.add('ninja');
    });
})

btnTous.addEventListener('click', ()=>{
    tabElemEncours = Array.from(elemEncours);
    tabElemFini = Array.from(elemFini);
    tabElemFini.forEach(ele => {
        ele.classList.remove('ninja');
    });
    tabElemEncours.forEach(el => {
        el.classList.remove('ninja')
    });
})

console.log(divStockTask);