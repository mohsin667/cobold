window.addEventListener('DOMContentLoaded', (event) => {
    const trigger = document.querySelector("#mobTrigger");
    const nav = document.querySelector("nav");
    const slideBack = document.querySelector(".logo .slide-arrow")
    trigger.addEventListener("click",e=>{
        nav.classList.add("flaot")
        $("body").css("overflow","hidden")
    })
    slideBack.addEventListener("click",e=>{
        nav.classList.remove("flaot")
        $("body").css("overflow","visible")
    })

    // banner slider
    $('.banner-slider').on('init', function(event, slick){
        $(".inner-slides").eq(0).addClass("animate");
    });
    $(".banner-slider").slick({
        dots:true,
        fade:true
    })
    $('.banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".inner-slides").removeClass("animate");
        $("[data-slick-index="+nextSlide+"]").addClass("animate");
      });

});


