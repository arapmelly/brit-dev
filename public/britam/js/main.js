$(document).ready(function () {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    $(function () {
        setTimeout(function () {
            if (location.hash) {
                window.scrollTo(0, 0);
                var target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }
        }, 1);
        $('a.scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                smoothScrollTo($(this.hash));
                return false;
            }
        });
        function smoothScrollTo(target) {
            var target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500, 'easeInOutExpo');
            }
        }
    });
});

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

if ($.fn.classyNav) {
    $('#roamingnav').classyNav();
}

// nav scroll   
var myoffset = $('#dtr-header-global').height();
$('.navbar a[href^="#"]').click(function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - myoffset
    }, "slow", "easeInSine");
});

//stickyatTop
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 340) {
        $(".scrollheader").addClass("is-sticky");
        $('.scrollheader').css('position', 'fixed');
    } else {
        $(".scrollheader").removeClass("is-sticky");
        $(".scrollheader").css('position', 'relative');
    }
});

$('.five-cards').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 10,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        768: {
            items: 3,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        992: {
            items: 4,
            nav: false,
            dots: true,
        },
        1200: {
            items: 5,
            nav: true,
            dots: true,
        }
    }
});

$('.news-and-stories').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 20,
    mouseDrag: false,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 2,
            nav: false,
            autoplay: true,
            dots: true,
            autoWidth: true,
            mouseDrag: true,
        },
        576: {
            items: 2,
            nav: false,
            autoWidth: true,
            dots: true,
            mouseDrag: true,
        },
        768: {
            items: 2,
            nav: false,
            mouseDrag: true,
            autoWidth: true,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            mouseDrag: true,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: false,
        }
    }
});

$('.history-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            nav: false,
            margin: 5,
            autoWidth: true,
            mouseDrag: true,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
});
$('.career-slider').owlCarousel({
    loop: false,
    mouseDrag: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            nav: true,
            margin: 15,
            autoplay: true,
            autoWidth: true,
            loop: true,
            mouseDrag: true,
            dots: false,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: true,
        }
    }
});

$('.three-slider').owlCarousel({
    loop: false,
    mouseDrag: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
});

$('.four-cards').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 20,
    mouseDrag: false,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
            margin: 15,
            autoWidth: true,
            autoplay: true,
            dots: true,
        },
        576: {
            items: 1,
            nav: false,
            dots: true,
            margin: 15,
            autoWidth: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
            margin: 15,
            autoWidth: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 4,
            nav: false,
            dots: true,
        }
    }
});
$('.six-cards').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    mouseDrag: false,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true,
        },
        576: {
            items: 3,
            nav: false,
            dots: true,
        },
        768: {
            items: 3,
            nav: false,
            dots: true,
        },
        992: {
            items: 4,
            nav: false,
            dots: true,
        },
        1200: {
            items: 6,
            nav: false,
            dots: true,
        }
    }
});
$('.full-banner').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 5,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
        }
    }
});


$('.one-card').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    smartSpeed: 900,
    responsive: {
        0: {
            items: 1,
        }
    }
});

$('.main-banner-full').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 5,
    mouseDrag: false,
    smartSpeed: 900,
    animateOut: 'fadeOut',
    navText: ["<i class='fas fa-long-arrow-left'></i>", "<i class='fas fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
        }
    }
});

//LightBox / Fancybox
$('.lightbox-image').fancybox({
    openEffect: 'fade',
    closeEffect: 'fade',
    helpers: {
        media: {}
    }
});



var delayTimer;
$(function () {
    $('#search-autocomplete').on('input', function () {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(function () {
            var query = $('#mod-ajaxsearch-searchword').val();

            var html = '';
            $.ajax({
                url: '/analyst-search',
                type: 'POST',
                data: { query: query },
                success: function (response) {


                    for (var i = 0; i < response.length; i++) {
                        html += '<div class="col-12 col-sm-6 col-lg-4 small-card starts-holder mb-4">';
                        html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                        html += '<div class="p-4">';
                        html += '<h2>' + response[i].title + '</h2>';
                        html += '<p>' + response[i].company + '</p>';
                        html += '<p>' + response[i].email + '</p>';
                        html += '</div>';
                        html += '</div>';
                        html += '</div>';
                    }

                    $('#search-results').html(html);

                    $("#search-query").addClass("d-none");
                },
                error: function (response) {
                    console.log(response);
                }
            });
        }, 500); // delay for 500 milliseconds
    });
});


// news year filter

$(function () {

    // Select the select element
    var selectElement = $('#news-year-select');

    // Attach a change event listener to the select element
    selectElement.on('change', function () {
        // Get the selected option value
        var selectedValue = $(this).val();

        var html = '';
        // Call the POST endpoint using AJAX
        $.ajax({
            url: '/news-search',
            method: 'POST',
            data: { value: selectedValue },
            success: function (response) {
                console.log(response);
                for (var i = 0; i < response.length; i++) {
                    html += '<div class="col-12 col-lg-3 small-card mb-4">';
                    html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                    html += '<div class="image-holder p-0 mb-0">';
                    html += '<img src="' + response[i].image + '" alt="Britam Website Join Us" width="100%">'
                    html += '</div>';
                    html += '<div class="p-3">';
                    html += '<span class="min-head">' + response[i].published_date + '</span>';
                    html += '<h2>' + response[i].title + '</h2>';
                    html += '<p>' + response[i].excerpt + '</p>';
                    html += '<a href="news/' + response[i].slug + '" class="btn btn-readmore">Read more<i class="fa-solid fa-arrow-right"></i></a>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }

                $('#search-results').html(html);

                $("#search-query").addClass("d-none");
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});



// news search

var delayTimer;
$(function () {
    $('#search-autocomplete').on('input', function () {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(function () {
            var query = $('#news-ajaxsearch-searchword').val();

            var html = '';
            $.ajax({
                url: '/news-search',
                type: 'POST',
                data: { value: query },
                success: function (response) {


                    for (var i = 0; i < response.length; i++) {
                        html += '<div class="col-12 col-lg-3 small-card mb-4">';
                        html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                        html += '<div class="image-holder p-0 mb-0">';
                        html += '<img src="' + response[i].image + '" alt="Britam Website Join Us" width="100%">'
                        html += '</div>';
                        html += '<div class="p-3">';
                        html += '<span class="min-head">' + response[i].published_date + '</span>';
                        html += '<h2>' + response[i].title + '</h2>';
                        html += '<p>' + response[i].excerpt + '</p>';
                        html += '<a href="news/' + response[i].slug + '" class="btn btn-readmore">Read more<i class="fa-solid fa-arrow-right"></i></a>';
                        html += '</div>';
                        html += '</div>';
                        html += '</div>';
                    }

                    $('#search-results').html(html);

                    $("#search-query").addClass("d-none");
                },
                error: function (response) {
                    console.log(response);
                }
            });
        }, 500); // delay for 500 milliseconds
    });
});


//financial results filter
// news year filter

$(function () {

    // Select the select element
    var selectElement = $('#financial-year-select');

    // Attach a change event listener to the select element
    selectElement.on('change', function () {
        // Get the selected option value
        var selectedValue = $(this).val();

        var html = '';
        // Call the POST endpoint using AJAX
        $.ajax({
            url: '/financial-search',
            method: 'POST',
            data: { value: selectedValue },
            success: function (response) {
                console.log(response);
                for (var i = 0; i < response.length; i++) {
                    var reports = response[i].reports;

                    console.log(reports[0]);

                    html += '<div class="col-12 col-sm-6 col-lg-4 small-card starts-holder mb-4">';
                    html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                    html += '<div class="p-4">';
                    html += '<h2>' + response[i].year + '</h2>';
                    html += '<ul class="starts">';
                    for (var j = 0; j < reports.length; j++) {
                        html += '<li>';
                        html += '<a href="/assets/' + reports[j].financial_report_list_report_document + '" target="_blank"><span>' + reports[j].financial_report_list_report_text + '</span> <i class="fa-solid fa-arrow-right"></i></a>';
                        html += '</li>';
                    }


                    html += '</ul>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }

                $('#search-results').html(html);

                $("#search-query").addClass("d-none");
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});


// corporate actions filter

$(function () {

    // Select the select element
    var selectElement = $('#corporate-year-select');

    // Attach a change event listener to the select element
    selectElement.on('change', function () {
        // Get the selected option value
        var selectedValue = $(this).val();

        var html = '';
        // Call the POST endpoint using AJAX
        $.ajax({
            url: '/corporate-search',
            method: 'POST',
            data: { value: selectedValue },
            success: function (response) {
                console.log(response);

                $("#search-query").addClass("d-none");

                if (response.length > 0) {
                    html += '<div class="col-12 downloads" id="#dividend">';
                    html += '<ul class="p-4 m-0 card">';
                    for (var i = 0; i < response.length; i++) {
                        html += '<li class="d-flex align-items-center justify-content-between">';
                        html += '<div class="title">';
                        html += '<span>' + response[i].date + '</span>';
                        html += '<h3>' + response[i].title + '</h3>';
                        html += '</div>';
                        html += '<a class="download-btn" href="/assets/' + response[i].document + '" target="_blank"><i class="fa-solid fa-download"></i> ' + response[i].cta_text + '</a>';
                        html += '</li>';
                    }
                    html += '</ul>';
                    html += '</div>';



                    $('#search-results').html(html);
                } else {

                    html += '<div class="col-12 downloads" id="#dividend">';
                    html += '<ul class="p-4 m-0 card">';
                    html += '<li class="d-flex align-items-center justify-content-between">';
                    html += '<div class="title">';
                    html += '<h3>There are currently no reports</h3>';
                    html += '</div>';
                    // html+='<a class="download-btn" href="/assets/'+response[i].document+'" target="_blank"><i class="fa-solid fa-download"></i> ' + response[i].cta_text + '</a>';
                    html += '</li>';
                    html += '</ul>';
                    html += '</div>';

                    $('#search-results').html(html);
                }


            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});


// webcast actions filter

$(function () {

    // Select the select element
    var selectElement = $('#webcast-year-select');

    // Attach a change event listener to the select element
    selectElement.on('change', function () {
        // Get the selected option value
        var selectedValue = $(this).val();

        var html = '';
        // Call the POST endpoint using AJAX
        $.ajax({
            url: '/webcast-search',
            method: 'POST',
            data: { value: selectedValue },
            success: function (response) {
                console.log(response);

                $("#search-query").addClass("d-none");

                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        html += '<div class="col-12 col-sm-6 col-lg-4 mb-4">';

                        html += '<a href="' + response[i].video + '" class="video-link lightbox-image video-fancybox">';
                        html += '<div class="single-popup-wrap" style="background-image: url(/assets/' + response[i].image + ')">';
                        html += '<div class="ht-popup-video video-button">';
                        html += '<div class="video-mark">';
                        html += '<div class="wave-pulse wave-pulse-1"></div>';
                        html += '<div class="wave-pulse wave-pulse-2"></div>';
                        html += '</div>';
                        html += '<div class="video-button__two">';
                        html += '<div class="video-play"> <span class="video-play-icon"></span> </div>';
                        html += '</div>';
                        html += '</div>';
                        html += '<div class="webcast-content">';
                        html += ' <h2>' + response[i].video_text + '</h2>';
                        html += '</div>';
                        html += '</div>';
                        html += '</a>';
                        html += '</div>';
                    }




                    $('#search-results').html(html);
                } else {


                    html += '<div class="card error-message"><h6>There are currently no webcasts</h6></div>';


                    $('#search-results').html(html);
                }


            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
  });


// AGM filter

$(function() {
    
    // Select the select element
  var selectElement = $('#agm-year-select');

  // Attach a change event listener to the select element
  selectElement.on('change', function() {
    // Get the selected option value
    var selectedValue = $(this).val();

    var html = '';
    // Call the POST endpoint using AJAX
    $.ajax({
      url: '/agm-search',
      method: 'POST',
      data: { value: selectedValue },
      success: function(response) {
        $("#search-query").addClass("d-none");
        
        if(response.length > 0) {
          
            for (var i = 0; i < response.length; i++) {

                var reports = response[i].reports;

                
               
                html +='<div class="col-12 col-sm-6 col-lg-4 small-card starts-holder mb-4">';
                html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                    html += '<div class="p-4">';
                        html += '<h2>'+response[i].year+'</h2>';
                        html += '<ul class="starts">';
                        
                        
                        for (var j = 0; j < reports.length; j++) {
                            html += '<li>';
                               html += '<a href="/assets/'+reports[j].agm_report_document.path+'" target="_blank"><span>'+reports[j].agm_report_text+'</span> <i class="fa-solid fa-arrow-right"></i></a>';
                            html += '</li>';
                           }
                           
                        html += '</ul>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
            }
           
           
      

        $('#search-results').html(html);
        }else{

            
            html+='<h6>There are currently no notices</h6>';
           

            $('#search-results').html(html);
        }

        
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });
});


// Annual filter

$(function() {
    
    // Select the select element
  var selectElement = $('#annual-year-select');

  // Attach a change event listener to the select element
  selectElement.on('change', function() {
    // Get the selected option value
    var selectedValue = $(this).val();

    var html = '';
    // Call the POST endpoint using AJAX
    $.ajax({
      url: '/annual-search',
      method: 'POST',
      data: { value: selectedValue },
      success: function(response) {
        $("#search-query").addClass("d-none");
        
        if(response.length > 0) {
            
           
        for (var i = 0; i < response.length; i++) {
            var reports = response[i].reports;
           html += '<div class="col-12 col-sm-6 col-lg-4 small-card starts-holder mb-4">';
                html += '<div class="card p-0 h-100 mb-0 overflow-hidden">';
                    html +='<div class="p-4">';
                        html += '<h2>'+response[i].year+'</h2>';
                        html +='<ul class="starts">';
                        for (var j = 0; j < reports.length; j++) {

                            html += '<li>';
                            html += '<a href="'+reports[j].financial_report_list_report_document+'" target="_blank"><span>'+reports[j].financial_report_list_report_text+'</span> <i class="fa-solid fa-arrow-right"></i></a>';
                            html += '</li>';
               
                        }

                        html += '</ul>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
                    }
           
           
      

        $('#search-results').html(html);
        }else{

            
            html+='<h6>There are currently no reports</h6>';
           

            $('#search-results').html(html);
        }

        
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });
});

