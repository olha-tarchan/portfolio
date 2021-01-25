$(window).scroll(function(){

    $.fn.isOnScreen = function(){
        let win = $(window);
        let viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        let bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    if ($('.statistics').isOnScreen() && $('.statistics .count-done').length < 1) {

        $('.counter').each(function() {
            let $this = $(this);
            let countTo = $this.attr('data-total');
            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 500,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        $this.addClass('count-done');
                    }
                });
        });
    }

});