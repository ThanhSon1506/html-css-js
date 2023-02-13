var range = document.querySelector('.range');
var process = document.querySelector('.process');
var value = document.querySelector('.process span');
var body = document.querySelector(' body');
var slider = document.getElementById('slider');

function updateProcess(percent) {
    process.style.width = `${percent}%`;
    value.innerText = `${percent}%`;
    body.style.background = `rgba(0, 0, 0, ${percent / 100})`;
}

range.addEventListener('mousemove', function (e) {
    var processWidth = e.pageX - this.offsetLeft;
    var percent = Math.round(processWidth / this.offsetWidth * 100);
    updateProcess(percent);
});

updateProcess(30);

slider.addEventListener('change', function (val) {
    console.log(this.value);
})
