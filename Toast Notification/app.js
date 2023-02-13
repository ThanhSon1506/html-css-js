var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function () {
    createToast('success', 1000, "Đây là thông báo thành công");
});
btnWarning.addEventListener('click', function () {
    createToast('warning', 1000, "Đây là thông báo cảnh báo");
});
btnError.addEventListener('click', function () {
    createToast('error', 1000, "Đây là thông báo nguy hiểm");
});
function createToast(status, timeout, message) {
    message = message || `This is a ${status} message`;
    let templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
    <span class="message">${message}</span>`;
    switch (status) {
        case 'succes':
            templateInner = `<i class="fa-solid fa-circle-check" ></i>
            <span class="message">${message}</span>`;
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">${message}</span>`;
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">${message}</span>`;
            break;
        default:
            break;
    }
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = `${templateInner}<span class="countdown"></span>`;
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);
    timeout = timeout || 4000;
    setTimeout(function () {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, timeout);
    setTimeout(function () {
        toast.remove();
    }, timeout + 2000);
}