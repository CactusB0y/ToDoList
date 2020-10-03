import { leCorps } from "./ajoutDeTache.js";

export let btnValModDel = leCorps.getElementsByTagName('button');



leCorps.addEventListener('click', (e)=>{
    if(e.target.innerText == "validé"){
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: #5FBCBD')
        e.target.innerText = "retour";
    } else if (e.target.innerText == "retour") {
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: white')
        e.target.innerText = "validé";
    }
})


