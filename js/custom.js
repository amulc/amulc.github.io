$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplaySpeed: 1000,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})