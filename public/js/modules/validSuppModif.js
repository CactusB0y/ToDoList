import { leCorps } from "./ajoutDeTache.js";

export let btnValModDel = leCorps.getElementsByTagName('button');


let btnSupAnu;
let inputModif;
//différentes action lé aux taches
leCorps.addEventListener('click', (e)=>{
    //btn validé
    if(e.target.innerText == "validé"){
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: #5FBCBD');
        e.target.innerText = "retour";
        e.target.parentNode.parentNode.classList.add('fini');
        e.target.parentNode.parentNode.classList.remove('encours');
    //btn décoché
    } else if (e.target.innerText == "retour") {
        e.target.parentNode.parentNode.setAttribute('style', 'background-color: white');
        e.target.innerText = "validé";
        e.target.parentNode.parentNode.classList.add('encours');
        e.target.parentNode.parentNode.classList.remove('fini');
    //btn supprimer
    } else if (e.target.innerText == 'supprimer'){
        btnSupAnu = document.createElement('button')
        e.target.parentNode.appendChild(btnSupAnu);
        btnSupAnu.classList.add('btnWithTask');
        btnSupAnu.innerText = 'oui';
        e.target.innerText = 'non';
        btnSupAnu.addEventListener('focus', ()=>{
            btnSupAnu.parentNode.parentNode.remove();
        });
    //btn annulation suppression
    } else if (e.target.innerText == 'non'){
        btnSupAnu.remove();
        e.target.innerText = 'supprimer'
    } else if (e.target.innerText == "modifier") {
        inputModif = document.createElement('input');
        e.target.parentNode.insertBefore(inputModif, e.target.nextSibling);
        inputModif.setAttribute('id', 'spanModifInput');
        e.target.innerText = "comfirmer"
        inputModif.value = e.target.parentNode.previousSibling.children[0].innerText;

    } else if (e.target.innerText == "comfirmer"){
        e.target.parentNode.previousSibling.children[0].innerText = e.target.nextElementSibling.value;
        e.target.nextElementSibling.remove();
        e.target.innerText = "modifier";
    }
})


