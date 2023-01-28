var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var gallleryImg = document.querySelector('.gallery__inner img');
var galllery = document.querySelector('.gallery');

var currentIndex = 0;
function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    //display
    gallleryImg.src = images[currentIndex].src;
    galllery.classList.add('show');
}
images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery();
        onkeydown = function (event) {
            var e = event || window.event;
            if (e.keyCode == '37' && currentIndex > 0) {
                //button left
                currentIndex--;
                showGallery();
            } else if (e.keyCode == '39' && currentIndex < images.length - 1) {
                //buttin right
                currentIndex++;
                showGallery();
            }
        }
    })
})

close.addEventListener('click', function () {
    galllery.classList.remove('show');
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        galllery.classList.remove('show');
    }
})



prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})