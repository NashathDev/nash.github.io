jQuery(document).ready(function () {
    var slider = $("#lightSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
    
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
    
        speed: 1000, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: false,
        pause: 4000,
        pauseOnHover: true,
    
        keyPress: false,
        controls: false,
    
        rtl: false,
        adaptiveHeight: false,
    
        vertical: false,
    
        thumbItem: 10,
        pager: false,
        gallery: false,
        currentPagerPosition: 'middle',
    
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
    
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              item: 3,
              slideMove: 1,
              slideMargin: 0,
            }
          },
          {
            breakpoint: 961,
            settings: {
              item: 2,
              slideMove: 1,
              slideMargin: 0,
            }
          },
          {
            breakpoint: 480,
            settings: {
              item: 1,
              slideMove: 1
            }
          }
        ]
    });
    $('.icon-chevron-left').click(function(){
        slider.goToPrevSlide(); 
    });
    $('.icon-chevron-right').click(function(){
        slider.goToNextSlide(); 
    });
}); 
