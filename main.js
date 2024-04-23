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



function cartHandlerOpen() {
    document.querySelector(".header__cart").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
}

function cartHandlerClose() {
    document.querySelector(".header__cart").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    alert(123)

}

function showNavaside (){
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".nav__aside").style.display = "block";

}

function showiTemInNavaside () {
    document.querySelector(".nav__aside__select__list").style.display = "block";

}