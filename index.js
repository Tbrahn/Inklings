$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 85){
        $('.navbar').css('background', 'transparent');
    } else{
        $('.navbar').css('background', 'rgba(255, 255, 255, 0.9)');
    }
});
