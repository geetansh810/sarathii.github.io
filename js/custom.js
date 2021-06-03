"use strict";
$(document).ready(function() {


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

 

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Landing 11 Testimonial Slider
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-slider-l-11").length > 0) {
        $(".testimonial-slider-l-11").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="l-11-slide-btn slick-prev focus-reset"><img src="./image/l2/long-arrow-left.png" alt=""></div>',
            nextArrow: '<div class="l-11-slide-btn slick-next focus-reset"><img src="./image/l2/long-arrow-right.png" alt=""></div>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }



    /*======================faq==============================*/
    const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));






});
