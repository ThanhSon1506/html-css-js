/*
- Cách 1: Hiển thị toàn bộ data, sau đó thì mình cho ẩn hiện theo topic
        uu diem: hiệu năng tốt
        nhược điểm: fix cung

- Cách 2: var arr=['rau ca rot','thit','ca']
        function render()
        var filterData=arr.filter
        ưu điểm: logic, dễ dàng, dễ hiểu, linh động làm thêm được các chức năng như sort
        nhược điểm: code dài hơn
*/
// ---cách 1---
// var btnList = document.querySelectorAll('button');
// var imglist = document.querySelectorAll('img');
// var container = document.querySelector('.food-container');
// btnList.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let type = e.currentTarget.getAttribute('type');
//         imglist.forEach(img => {
//             let foodType = img.getAttribute('type');
//             if (type == 'all' || foodType == type) {
//                 img.classList.remove('hide');
//             } else {
//                 img.classList.add('hide');

//             }
//         })
//     });
// });

//---cách 2---
//init data
var imglist = document.querySelectorAll('img');
var container = document.querySelector('.food-container');
var btnList = document.querySelectorAll('button');
var arr = [];
imglist.forEach(item => {
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    });
});

function activeButton(btnActive) {
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });
    btnActive.classList.add('active');
}
btnList.forEach(btn => {

    btn.addEventListener('click', e => {
        //active button
        activeButton(e.currentTarget);
        //filter data
        let type = e.currentTarget.getAttribute('type');
        if (type == 'all') {
            render(arr);
            return;
        }
        let filterData = arr.filter(food => {
            return food.type == type;
        });
        render(filterData);
    });
});
function render(list) {
    console.log(list);
    container.innerHTML = '';
    list.forEach(item => {
        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);
        let divElement = document.createElement('div');
        divElement.classList.add('food');
        divElement.append(imgElement);
        container.append(divElement);
    })
}

