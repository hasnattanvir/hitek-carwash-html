// mobile menu
$(document).ready(function() {

    var menu = new MmenuLight(
        document.querySelector('#menu'),
        'all'
    );

    var navigator = menu.navigation({
        // selectedClass: 'Selected',
        // slidingSubmenus: true,
        // theme: 'dark',
        // title: 'Menu'
    });

    var drawer = menu.offcanvas({
        // position: 'left'
    });

    //	Open the menu.
    document.querySelector('a[href="#menu"]')
        .addEventListener('click', evnt => {
            evnt.preventDefault();
            drawer.open();
        });

});

//review slider
$(document).ready(function(){
    $('.reviewSlider').slick({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slickGoTo:false,
        dots:true,
        // nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        // prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        arrows:false,
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
    
          }
    
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
    
          }
        },  {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            dots:true,

          }
        }]
      });
});

// search box popup
$(document).ready(function() {
  $('#close-btn').click(function() {
    $('#search-overlay').fadeOut();
    $('#search-btn').show();
  });
  $('#search-btn').click(function() {
    $(this).hide();
    $('#search-overlay').fadeIn();
  });
});