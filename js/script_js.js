
const  animItems = document.querySelectorAll('.anim-items');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for(let index = 0; index<animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart =2;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }
            console.log(pageYOffset);
            if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset <(animItemOffset+animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if(!animItem.classList.contains('anim-no-hide')){
                    animItem.classList.remove('active');
                }
            }
        }
    }
    function offset(el){
        const rect=el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop; //??window.pageYOffset
        return{ top:rect.top + scrollTop, left:rect.left + scrollLeft}
    }
    animOnScroll();
}