import { leCorps } from "./ajoutDeTache.js";

export let btnValModDel = leCorps.getElementsByTagName('button');


let btnSupAnu;

leCorps.addEventListener('click', (e)=>{
    if(e.target.innerText == "validé"){
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: #5FBCBD')
        e.target.innerText = "retour";
    } else if (e.target.innerText == "retour") {
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: white')
        e.target.innerText = "validé";
    } else if (e.target.innerText == 'supprimer'){
        btnSupAnu = document.createElement('button')
        e.target.parentNode.appendChild(btnSupAnu);
        btnSupAnu.classList.add('btnWithTask');
        btnSupAnu.innerText = 'sur ?';
        e.target.remove();
        btnSupAnu.addEventListener('focus', ()=>{
            btnSupAnu.parentNode.parentNode.remove();
        });
    } else if (e.target.innerText == 'modifier'){
        
    }
})


