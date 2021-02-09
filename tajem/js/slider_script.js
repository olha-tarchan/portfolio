$(document).ready(function(){
    $('.slider_user').slick({
        arrows:true,
        slidesToShow:5,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        draggable:false,
        centerMode:true,
        variableWidth:true,
        focusOnSelect: true,
        asNavFor:'.slider_comment',

    });
    $('.slider_comment').slick({
        arrows:false,
        fade:true,
        asNavFor:'.slider_user',
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
    });
})