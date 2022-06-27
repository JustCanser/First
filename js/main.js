(function () {
    const header = document.querySelector(".header");/* метод возвращает первый элемент с заданным селектором */
    window.onscroll = function (){
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        }
        else{
            header.classList.remove('header_active')
        }
    }
}());