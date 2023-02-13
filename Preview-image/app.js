var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');
upload.addEventListener('change', function (e) {
    var file = upload.files[0]
    if (!file)
        return;
    if (!file.name.endsWith('.jpg')) {
        error.innerText = "Hinh anh phai thuoc dinh dang jpeg";
        return;
    } else {
        error.innerText = "";
    }
    if (file.size / (1024 * 1024) > 5) {
        error.innerText = "Chi duoc upload anh < 5MB";
        return;
    } else {
        error.innerText = ""
            ;
    }
    var img = document.createElement('img');
    img.src = "";
    var fileReader = new FileReader(file);
    fileReader.readAsDataURL(file);
    var img = document.createElement('img');

    fileReader.onloadend = function (e) {
        img.src = e.target.result;

    }
    // img.src = URL.createObjectURL(upload.files[0]);
    preview.appendChild(img);
});