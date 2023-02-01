var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.remove-all');

var tags = ['Nodejs', 'Reactjs']

// function
function render() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>${tag}<i class="fas fa-times" onclick="removeTag(${i})"></i></li>`
    }
    content.appendChild(input);
    input.focus();
}
function removeTag(index) {
    tags.splice(index, 1);
    render();
}
// listener
render();
input.addEventListener('keydown', function (event) {
    if (!tags.includes(input.value.trim()) && input.value.trim() != "") {
        if (event.key == 'Enter') {
            tags.push(input.value.trim());
            input.value = "";
            render();
            console.log(tags);
        }
    } else {
        input.value = "";
    }
})
btnRemoveAll.addEventListener('click', function () {
    tags = [];
    render();
})