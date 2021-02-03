//show decore-image
let animItems = document.querySelectorAll('.anim-item');

if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(param){
        for(let index=0; index<animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight= animItem.offsetHeight; //В-та Об-та
            const animItemOffset = offset(animItem).top; //положение Об-та на странице
            const animStart = 4; // коеф-т старта анимации

            let animItemPoint = 0 ;

            //если В-та Об-та < от ВОБр-ра:
            if(animItemHeight < window.innerHeight){
                animItemPoint = window.innerHeight-animItemHeight/animStart;//   window.innerHeight = В-а ОкБр
            }else{
                animItemPoint= window.innerHeight - window.innerHeight/animStart;
            }

            //pageYOffset -данные проскроленных пикселей
            if((pageYOffset>animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            }else{
                if(!animItem.classList.contains('anime-no-hide')){
                    animItem.classList.remove('active');
                }
            }

        }
    }

    /*
     Ф-ция корректно, кроссбраузерно определяет положение
     объекта el относительно страницы
     */
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {    top: rect.top+scrollTop,
            left: rect.left+scrollLeft
        }
    }
    //Задержка
    setTimeout(() => {
        animOnScroll();
    }, 300)

}


/*
==========================footer========================================================================
 */

document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
