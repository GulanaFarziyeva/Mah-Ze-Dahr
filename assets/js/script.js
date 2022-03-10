const headerTitleIcon = document.querySelector('.header-title__icon');
const headerTitle = document.querySelector('.header-title');
const main = document.querySelector('.main');
headerTitleIcon.addEventListener('click', () =>{
    headerTitle.style.display = "none"
    main.style.marginTop = "81px"

});

const hamburgerMenu = document.querySelector('.navbar__icons__hamburger-menu');
const navLinks = document.querySelector('.navbar__links');
hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const headerSearch = document.querySelector('.header-search');
const navbarSearch = document.querySelector('.navbar--search');

navbarSearch.addEventListener('click', () =>{
    if (headerSearch.style.left == "-100%"){
        headerSearch.style.left = "0"
    } else{
        headerSearch.style.left = "-100%"
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    marginRight: 30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

const birthday = document.querySelector ('.birthday');
const bestSellers = document.querySelector ('.best-seller');
const hostessGift = document.querySelector ('.hostess-gift');
const thankYou = document.querySelector ('.thank-you');
const homeShopBirthday = document.querySelector('.home-shop-section__img__part-one');
const homeShopBestSellers = document.querySelector('.home-shop-section__img__part-two');
const homeHostessGift = document.querySelector('.home-shop-section__img__part-three');
const homeShopThankYou = document.querySelector('.home-shop-section__img__part-four');
hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('show');
    navLinks.classList.toggle('show');
})

bestSellers.addEventListener('click', () =>{
    homeShopBirthday.style.display = 'none';
    homeHostessGift.style.display = 'none';
    homeShopThankYou.style.display = 'none';
    homeShopBestSellers.setAttribute('style', 'display:block !important');
});

hostessGift.addEventListener('click', () =>{
    homeShopBirthday.style.display = 'none';
    homeShopBestSellers.style.display = 'none';
    homeShopThankYou.style.display = 'none';
    homeHostessGift.setAttribute('style', 'display:block !important');
});

thankYou.addEventListener('click', () =>{
    homeShopBirthday.style.display = 'none';
    homeHostessGift.style.display = 'none'
    homeShopBestSellers.style.display = 'none'
    homeShopThankYou.setAttribute('style', 'display:block !important');
});

birthday.addEventListener('click', () =>{
    homeShopBestSellers.style.display = 'none';
    homeHostessGift.style.display = 'none'
    homeShopThankYou.style.display = 'none'
    homeShopBirthday.style.display= 'block';
});

