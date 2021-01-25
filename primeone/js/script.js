/*===========================================================*/
/*
* При зміні вікна браузера меню (язикова панель .header-top-lang,header-bottom)
* закидується до .header-menu і назад.
* Це необхідно для бургер-меню
*
* */
//Зміна розміру вікна
let addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function(event) {
    adaptive_function();
});

function adaptive_header($width, $hight, $maxWith){
    let logoImage = document.querySelector('.header-logo'),
        menuLang = document.querySelector('.header-top-lang'),
        menuBottom = document.querySelectorAll('.header-bottom-menu-list'),

        blockBurgerMenu = document.querySelector('.header-menu'),
        blockHeaderTop = document.querySelector('.header-top');

    if($width < $maxWith){
        if(!menuLang.classList.contains('done') ){
            menuLang.classList.add('done');
            blockBurgerMenu.append(menuLang);
        }


        menuBottom.forEach(($this, $i) => {
            if(!$this.classList.contains('done') ){
                $this.setAttribute('data-menu', $i);
                $this.classList.add('done');
                $this.parentElement.setAttribute('data-menu-block', $i);
                blockBurgerMenu.append($this);
            }
        });

    }else{
        if(menuLang.classList.contains('done')){
            menuLang.classList.remove('done');
            blockHeaderTop.prepend(menuLang);
        }


        menuBottom.forEach(($this,$i) => {
            let dataIndex = $this.getAttribute('data-menu'),
                parentBlockMenu = document.querySelector('[data-menu-block="'+dataIndex+'"]');
            if($this.classList.contains('done')  ){
                $this.classList.remove('done');
                $this.removeAttribute('data-menu');

               parentBlockMenu.append($this);
               parentBlockMenu.removeAttribute('data-menu-block');
            }
        });
    }
}
function adaptive_function(){
    let $width = document.documentElement.clientWidth,
        $height = document.documentElement.clientHeight;
    adaptive_header($width, $height, 791);
}
adaptive_function();

/*===========================================================*/
/*===========================================================*/
/*
*
* Клік на кнопку меню
*
*
**/
document.querySelector('.wrapper').classList.add('load');

document.querySelector('.header-menu_icon').addEventListener("click", (e) =>{
    e.currentTarget.classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.header-menu').classList.toggle('active');
    document.body.classList.toggle('lock');
})



