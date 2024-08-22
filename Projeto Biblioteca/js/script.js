adicionaAbas(1)
let adicionaEvtNav = () => {
    let nav = document.querySelector('nav');

    nav.addEventListener('click', (evt) => {
        if(evt.target.id == 'cadastro'){
            adicionaAbas(1);            
        }
        if(evt.target.id == 'lista'){
            adicionaAbas(2);  
        }
    });
}
adicionaEvtNav();