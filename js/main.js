$(document).ready(function(){

  let slidesShow = 3;

  

  
  // window.addEventListener('resize',function(){
  //   let screenWidth = document.documentElement.clientWidth;
  //   if (screenWidth<640 && slidesShow == 3){
  //     $('.slider').slick({
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //     });
  //     slidesShow = 2
  //   } else if(screenWidth>=640 && slidesShow == 2){
  //     $('.slider').slick({
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //     });
  //   };
  // });

  $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
  });


  //nav
  $('.burger_menu').on('click',function(event){
    $('.header_bottom').toggleClass('header_bottom-off');
    $('.header_nav').toggleClass('header_nav-active header_nav-off');
    $('.burger_menu').toggleClass('burger_menu-active');
    $('.header_search-container').toggleClass('header_search-container-active');
    $('body').toggleClass('lock');
  });
  
  $('.header_bottom-fon').on('click',function(event){
    $('.header_bottom').toggleClass('header_bottom-off');
    $('.header_nav').toggleClass('header_nav-active header_nav-off');
    $('.burger_menu').toggleClass('burger_menu-active');
    $('.header_search-container').toggleClass('header_search-container-active');
    $('body').toggleClass('lock');
  });

  //slider
  
  let slide_number = 0
  
  function arrowsColor(slides,slidesLength){
    for (let i of slides){
      slide_number++
      if(slide_number==1){
        $('.slick-prev').css('border-right-color',$(i).children('.slider_page-inner').children('.slider_page-title').css('background-color'))
      }
      if(slide_number==slidesLength){
        $('.slick-next').css('border-left-color',$(i).children('.slider_page-inner').children('.slider_page-title').css('background-color'))
        slide_number = 0
      }
    }
  }

  let slides = $('.slick-active');
  arrowsColor(slides,slides.length)

  $('.slider').on('afterChange',function(event, slick, currentSlide, nextSlide){
    let slides = $('.slick-active');
    arrowsColor(slides,slides.length)
  })
  


  

  //gallery
  const photo1 = $('.photo1_inner').css('background-image');
  const photo2 = $('.photo2_inner').css('background-image');
  const photo3 = $('.photo3_inner').css('background-image');
  const photo4 = $('.photo4_inner').css('background-image');


  $('.gallery_main-photo').css('background-image',photo1);
  
  $('.photo1').on('click',function(event){
    $(this).parent('.gallery_set').parent('.gallery').children('.gallery_main-photo').css('background-image',photo1);
    // $('.gallery_main-photo').css('background-image',photo1);
  });
  $('.photo2').on('click',function(event){
    $(this).parent('.gallery_set').parent('.gallery').children('.gallery_main-photo').css('background-image',photo2);
    // $('.gallery_main-photo').css('background-image',photo2);
  });
  $('.photo3').on('click',function(event){
    $(this).parent('.gallery_set').parent('.gallery').children('.gallery_main-photo').css('background-image',photo3);
    // $('.gallery_main-photo').css('background-image',photo3);
  });
  $('.photo4').on('click',function(event){
    $(this).parent('.gallery_set').parent('.gallery').children('.gallery_main-photo').css('background-image',photo4);
    // $('.gallery_main-photo').css('background-image',photo4);
  });
});