window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   // Kiểm tra vị trí cuộn
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
       // Hiển thị phần tử khi cuộn xuống 50px
        document.getElementById("subheader").style.display = "flex";
    } else {
        // Ẩn phần tử khi cuộn lên trên 50px
        document.getElementById("subheader").style.display = "none";
    }
}

// SLIDE SHOE HANDLER
const slideImgList = document.querySelector('.slide__img__list')
const imgs = slideImgList.getElementsByTagName('img')
let currentImg = 0;
setInterval(() => {
    if(currentImg == imgs.length -1) {
        currentImg = 0;
        let widthImg = imgs[0].offsetWidth
        slideImgList.style.transform = `translateX(0px)`
    } else {
        currentImg ++
        let widthImg = imgs[0].offsetWidth
        slideImgList.style.transform = `translateX(${widthImg*-1*currentImg}px)`
    }
}, 2000);









const overLay = document.querySelector('.overlay')
// HEADER CART
function showCart () {
    document.querySelector('.header__cart').style.right = 0;
    overLay.style.display = 'block'
    overLay.addEventListener('click', () => {
        removeCart()
    })
    
}
function removeCart () {
    document.querySelector('.header__cart').style.right = '-100%';
    overLay.style.display = 'none'

}

// HEADER SEARCH
const searchHeaderIcons = document.querySelectorAll('.icon__search__header')
const headerSearch = document.querySelector('.header__search')
searchHeaderIcons.forEach((icon)=> {
    icon.addEventListener('click', () => {
        headerSearch.classList.add('active')
        overLay.style.display = 'block'
        overLay.addEventListener('click', () => {
            removeSearch()
        })
    })
})

function removeSearch() {
    headerSearch.classList.remove('active')
    overLay.style.display = 'none'
}

// HEADER ACCOUNT
const accountIcon = document.querySelector('.icon__account')
function showAccountForm() {
    document.querySelector('.account__form__login').style.display = 'block'
    overLay.style.display = 'block'
    overLay.addEventListener('click', () => {
        closeAccountForm()
    })
}
function closeAccountForm() {
    document.querySelector('.account__form__login').style.display = 'none'
    document.querySelector('.account__form__signup').style.display = 'none'
    overLay.style.display = 'none'
    
}
function showSignupForm() {
    document.querySelector('.account__form__login').style.display = 'none'
    document.querySelector('.account__form__signup').style.display = 'block'
    overLay.addEventListener('click', () => {
        closeAccountForm()
    })
}
function showLoginForm() {
    document.querySelector('.account__form__signup').style.display = 'none'
    document.querySelector('.account__form__login').style.display = 'block'
    overLay.addEventListener('click', () => {
        closeAccountForm()
    })
}

// NAV ASIDE 
function showNavaside() {
    document.querySelector('.nav__aside').style.right = 0;
    overLay.style.display = 'block'
    overLay.addEventListener('click', () => {
        closeNavAside()
    })
}
function closeNavAside() {
    document.querySelector('.nav__aside').style.right = '-100%';
    overLay.style.display = 'none'
}
function showiTemInNavaside() {
    const navAsideItemList = document.querySelector('.nav__aside__select__list')
    if(navAsideItemList.classList.contains('active'))
        navAsideItemList.classList.remove('active')
    else
        navAsideItemList.classList.add('active')
}
const navAsideListItem = document.querySelectorAll('.nav__aside__select')
navAsideListItem.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavAside()
    })
})
document.querySelector('.nav__aside__item__connect').addEventListener('click', (e) => {
    const NavAsideIcon = e.target.parentElement.parentElement.querySelector('.footerlist__icons')
    if(NavAsideIcon.classList.contains('active'))
        NavAsideIcon.classList.remove('active')
    else
        NavAsideIcon.classList.add('active')
})

// NAV SECTION
const navSectionLists = document.querySelectorAll('.content__section__nav')
navSectionLists.forEach((list)=> {
    const navSectionItems = list.querySelectorAll('.content__section__nav__item')
    navSectionItems.forEach((item)=>{
        item.addEventListener('click', () => {
            navSectionItems.forEach((item) => {
                if(item.classList.contains('content__section__nav__selected'))
                    item.classList.remove('content__section__nav__selected')

            })
            item.classList.add('content__section__nav__selected')
        })
    })
})


// FOOTER LIST
const footerTitles = document.querySelectorAll('.footer__title__text')
footerTitles.forEach((title) =>{
    const footerList = title.parentElement.querySelector('.footerlist__link')
    title.addEventListener('click', () => {
        if(footerList.classList.contains('active')){
            footerList.classList.remove('active')
        }
        else{
            footerList.classList.add('active')
        }

    })
})
function showFooterConnect() {
    const footerIocns = document.querySelector('.footerlist__icons')
    if(footerIocns.classList.contains('active'))
        footerIocns.classList.remove('active')
    else
        footerIocns.classList.add('active')
    
}
