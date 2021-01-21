// preload on window load event
$(window).on('load', function () {
  $('.loader .inner').fadeOut(500, function () {
    $('.loader').fadeOut(750);
  });

  // filter with mixit up

  var containerEl = document.querySelector('.items');
  var mixer = mixitup(containerEl);
});

$(document).ready(function () {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  });

  var typed = new Typed('.typed', {
    strings: [' Developer', ' Designer'],
    typeSpeed: 70,
    loop: true,
    startDelay: 100,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 1,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      745: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
  });

  const skillsTopOffset = $('.skillSection').offset().top;
  const statsTopOffset = $('.statsSection').offset().top;
  let countUpFinished = false;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        },
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function () {
        const element = $(this);
        const endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  $('[data-fancybox="gallery"]').fancybox();

  $('.list').click(function () {
    $('.list').removeClass('current');
    $(this).addClass('current');
  });

  $(function () {
    $('.navbar-toggler-icon').on('click', function () {
      $('.navbar-toggler-icon').toggleClass(
        'navbar-toggler-menu navbar-toggler-close'
      );
    });
  });

  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    let body = $('body');

    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }
});
