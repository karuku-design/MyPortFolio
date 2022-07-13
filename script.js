$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar2').addClass("sticky");
           
        }else{
            $('.navbar2').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    //typing animation
    var typed= new Typed(".typing",{
        strings:["a Computer Scientist","a Web developer","an Android developer","an IT support technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

     //typing animation
     var typed2= new Typed(".typing2",{
        strings:["a Developer","a Computer Scientist","an IT support technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar2.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


