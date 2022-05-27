$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        
        responsive:{
            // 0:{
            //     items:1,
    
            // },
            400:{
                items:1,
                
            },
            
            600:{
                items:2,
                
            },
            
            1000:{
                items:3,
               
            }
        }
    })
});