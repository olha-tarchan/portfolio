document.querySelector('.header-menu_icon').addEventListener("click", (e) =>{
    e.currentTarget.classList.toggle('active');
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('.header-menu').classList.toggle('active');
    document.body.classList.toggle('lock');

})

document.querySelector('.btn-login').addEventListener("click", (e) =>{
    let menu = document.getElementById('menu-panel');

    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        document.querySelector('#menu').classList.remove('active');
        document.querySelector('.header-menu_icon').classList.remove('active');
        document.body.classList.remove('lock');

    }
    document.body.classList.add('lock');
    document.querySelector('.modal').classList.add('active');
})

let elements = document.querySelectorAll(".modal-close");
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
        document.body.classList.remove('lock');
        document.querySelector('.modal').classList.remove('active');
    };
}


/*


Выкинуть на гитхаб

Найти новый шаблон
 */