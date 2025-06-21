let hamburger = document.getElementById('label1');
let menu = document.getElementById('nav');

// hamburger.addEventListener('click', function(){
//     menu.classList.toggle('show');
// });
let isOpen = true;

hamburger.addEventListener('click', ()=>{
    if(isOpen){
        menu.classList.add('show');
        menu.classList.remove('notshow');
        
        isOpen = false;
    }
    else{
        menu.classList.add('notshow');
        menu.classList.remove('show');
        isOpen = true;
    }

})