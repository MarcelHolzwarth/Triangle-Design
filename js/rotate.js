
var $tri = $('.triangle2');
var $win= $(window);
var t = true;

$win.on('scroll', function() {

    if(t) {
        var top = ($win.scrollTop());
        if(top < 180 && top > 170) {
            t = false;
        }
    }

    if(t == false) {
        top = 180;
    }

    console.log(top);
    $tri.css('transform','rotate(' + top + 'deg)');
})
