$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });
});

$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
});