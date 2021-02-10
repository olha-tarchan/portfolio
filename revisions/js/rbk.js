const arrPlace = [
    {   title:'Росстрах страхование',
        address: 'Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },{   title:'АльфаСтрахование Здоровья наше',
        address: 'Санкт-Петербург, проспект Маршала Блюхера-Знаменского, 20',
        link:'#'
    },{   title:'Cлужба доставки украинской кухни',
        address: 'Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица',
        link:'#'
    },
    {   title:'Росстрах страхование',
        address: 'Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },{   title:'Росстрах страхование',
        address: 'Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },{   title:'Служба доставки украинской кухни ',
        address: 'Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица Санкт-Петербург, Зеленый проспект, еще одна Очень-Очень Длинная Улица',
        link:'#'
    },
    {   title:'Росстрах страхование1',
        address: '1Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование2',
        address: '2Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование3',
        address: '3Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование4',
        address: '4Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование5',
        address: '5Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование6',
        address: '6Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование7',
        address: '5Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование8',
        address: '6Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },    {   title:'Росстрах страхование1',
        address: '1Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование2',
        address: '2Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование3',
        address: '3Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование4',
        address: '4Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование5',
        address: '5Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование6',
        address: '6Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование7',
        address: '5Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    },
    {   title:'Росстрах страхование8',
        address: '6Санкт-Петербург, Зеленый пр., 20',
        link:'#'
    }
];
const btnLoadOne =document.querySelector('.places-load');
const maxItems = 5;

let placeOne = document.querySelector('#place-one'),
    currentItem = 0;
    arrNewPlaceOne = arrPlace.concat();

function loadPlacesInOne(){
    if(currentItem > maxItems){
        return;
    }
    const item =arrNewPlaceOne.shift();
    if(typeof item == "undefined"){
        return;
    }
    document.getElementById('place-one').innerHTML +=
        '<div class="place-item"><div class="place-title"><a href="'
        +item.link+'">'
        +item.title+'</a></div><div class="place-address">'
        +item.address+'</div></div>';
    currentItem++;

    loadPlacesInOne();
}

loadPlacesInOne();

btnLoadOne.addEventListener("click", (e) => {
    currentItem=0;
    loadPlacesInOne();
    if (arrNewPlaceOne.length<1){ btnLoadOne.classList.add('hide');}
});

$(document).ready(function(){
    $('.slider-two').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToShow:4,
        slidesToScroll:2,
        speed:1000,
        easing:'linear',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        touchThreshold:4,
        touchMove:true,
        waitForAnimate:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            }, {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
            ]
    });

    $('.slider-three').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1000,
        easing:'linear',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        touchThreshold:2,
        touchMove:true,
        waitForAnimate:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            }, {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    });

    $('.slider-four').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1000,
        easing:'linear',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        touchThreshold:2,
        touchMove:true,
        waitForAnimate:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            }, {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
            ]
    });

})