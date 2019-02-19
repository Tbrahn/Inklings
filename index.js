$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 85){
        $('.navbar').css('background', 'transparent');
    } else{
        $('.navbar').css('background', 'rgba(255, 255, 255, 0.9)');
    }
});


if(window.screen.width < 500){
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){  
    var st = window.pageYOffset || document.documentElement.scrollTop;  
    if (st > lastScrollTop){
        document.getElementById("navbar").style.top = "-100%";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    lastScrollTop = st;
    }, false);
}