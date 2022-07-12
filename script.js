$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar2').addClass("sticky");
           
        }else{
            $('.navbar2').removeClass("sticky");
        }
        
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar2.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


