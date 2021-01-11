$(document).ready(function(){

    $('.icon-menu').on('click', function() {
        this.classList.toggle('active');
        $('.header,.header-menu').toggleClass('active');
    })

/*
======Header menu ==========================================
*/
    let lastId,
        topMenu = $("#top-menu"),

        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            let item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.click(function(e){
        let href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

/*
======Change header pagination: ==========================================
*/
    function headerPagination(){
        console.log("page");
        let headerPaginationBlock = $('.header-pagination');
        let activeMenuIndex = $('#top-menu a.active').index()+1;
        let numberSection = activeMenuIndex<10 ? "0"+activeMenuIndex : activeMenuIndex;
        console.log("activeMenuIndex ",activeMenuIndex);
        console.log("numberSection ",numberSection);
        $('.header-pagination-current-num').text(numberSection);
    }
  //  headerPagination();
/*
======Load line-skills==========================================
*/
    function preloadBarAnimate(block){
        let blockPosition = block.offset().top,
            blockHeight = block.innerHeight(),
            scrollPos   = $(window).scrollTop();
        let elemAnimate = block.find('[data-preloadbar]');
        let positionBlockTopOnPage = blockPosition - $(window).height() +blockHeight/1.5;
        elemAnimate.each(function () {
            let dataFill = $(this).attr('data-preloadbar'),
                widthSkill = $(this).closest('.preload-bar-item').width();
            $(this).width(Math.ceil(dataFill * widthSkill / 100));
            if( scrollPos > positionBlockTopOnPage  && scrollPos < (blockPosition+blockHeight)) {
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        })
    }
    preloadBarAnimate($('.skills'));


    $(window).scroll(function (){
        /*======Header menu ==========================================*/
        // Get container scroll position
        let fromTop = $(this).scrollTop()+$(window).height()/2;

        // Get id of current scroll item
        let cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        let id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            menuItems
                .removeClass("active")
                .filter("[href='#"+id+"']").addClass("active");

            console.log('cur = ',cur.index());
            let numberSection = (cur.index()+1)<10 ? "0"+(cur.index()+1) : (cur.index()+1);
           $('.header-pagination-current-num span')
               .animate({
                   "left": "-=5px",
                   "opacity": 0
               }, "fast")
               .text(numberSection)
               .animate({
               "left": "0px",
               "opacity": 1
           },"fast");

        }

        /*======header-pagination========================================== */
      //  headerPagination();



        /*======Load line-skills========================================== */
        preloadBarAnimate($('.skills'));
    });

    /*

==================================================================================
     */

});
