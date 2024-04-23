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

const overLay = document.querySelector('.overlay')

const cartIcon = document.querySelector('#icon__cart')
const cartContainer = document.querySelector('.header__cart')
cartIcon.addEventListener('click', () => {
    cartContainer.classList.add('active')
    document.querySelector('.header__cart__close').style.display = 'block'
    
})
function removeCart () {
    console.log(cartContainer)
    cartContainer.classList.remove('active')
    document.querySelector('.header__cart__close').style.display = 'none'
}


const navAsideItem = document.querySelector('.nav__aside')
function showNavaside () {
    navAsideItem.classList.add('active')
    document.querySelector('.nav__aside__close').style.display = 'block'
}

function removeNavAside () {
    navAsideItem.classList.remove('active')
    document.querySelector('.nav__aside__close').style.display = 'none'

}
