$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
    });

    $("#about-btn_player").on('click', function() {
        let video = $("video"),
            blockPlayer = $('.about-player');
        blockPlayer.toggleClass('active');
        (video.get(0).paused) ? video.get(0).play() : video.get(0).pause();

    });

    $('.rev_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });


    /*===========Header menu ==============     */

    let header = $('.header'),
        iconMenu =   header.find('.icon-menu'),
        menu = $('.menu-anchor'),
        menuLink = menu.find('a');

    function toggleMenuHeader(){
        iconMenu.toggleClass('active');
        menu.toggleClass('active');
        header.toggleClass('active');
    }
    iconMenu.on('click', function(){
        toggleMenuHeader();
    })

    menuLink.on('click',function(e){
        let $this=$(this);
        let href = $this.attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;

        if(menu.hasClass('active')){
            toggleMenuHeader();
            offsetTop = $(href).offset().top-header.height();
        }

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000 );
        e.preventDefault();
    });
});
