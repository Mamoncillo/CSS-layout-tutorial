(function () {
    var editor = document.querySelector('.editor'),
        info = document.querySelector('.info'),
        toolbarSpan = document.querySelectorAll('.toolbar span');

    var array = [editor, info];

    for (var i = 0, l = toolbarSpan.length; i < l; i += 1) {
        toolbarSpan[i].addEventListener('click', (function (j, i) {

            return function (e) {
                e.target.classList.add("active");
                toolbarSpan[j].classList.remove("active");
                array[i].classList.add("active");
                array[j].classList.remove("active");
            };
        }(l-i-1, i)));
    }
}());
