AOS.init();


function toggleMenu() {
    console.log(this);
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

function handleWindowScrollEvent() {
    const mainNavbar = document.querySelector('.main__navbar');
    window.scrollY > 50 ? mainNavbar.classList.add('bg-white') : mainNavbar.classList.remove('bg-white');
}

function handleCarouselControls() {
    const $this = $(this);
    const $carousel = $this.closest('.carousel');
    const direction = $this.attr('data-slide');
    $carousel.carousel(direction);
}

function handleCarouselIndicators() {
    const $this = $(this);
    const $carousel = $this.closest('.carousel');
    const slideIndex = parseInt($this.attr('data-slide-to'));
    $carousel.carousel(slideIndex);
}

Array.from(document.querySelectorAll('.navbar .menu__toggler')).forEach(menuToggler => menuToggler.addEventListener('click', toggleMenu));

Array.from(document.querySelectorAll('.carousel .carousel-control .btn')).forEach(carouselControl => carouselControl.addEventListener('click', handleCarouselControls));

Array.from(document.querySelectorAll('.carousel .carousel-indicator li')).forEach(carouselControl => carouselControl.addEventListener('click', handleCarouselIndicators));

window.addEventListener('scroll', handleWindowScrollEvent);


$('.carousel').on('slide.bs.carousel', function(event) {
    const $targetIndicator = $(this).find(`.carousel-indicator li[data-slide-to="${event.to}"]`);
    if ($targetIndicator) {
        $targetIndicator.siblings().removeClass('active');
        $targetIndicator.addClass('active');
    }
});