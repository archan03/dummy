window.onload = function () {
    // your code 

    const listViewButton = document.querySelector('#list-view-button');
    const gridViewButton = document.querySelector('#grid-view-button');
    const list = document.getElementsByClassName('bg_style');
    const view = document.getElementsByClassName('card');
    const page = document.getElementsByClassName('page-item');
    const x = window.matchMedia("(max-width:768px)")
   
const filterBtn = document.querySelector('#filter_btn');
const filterDiv = document.getElementsByClassName('filter_div')
const filterItem = document.getElementsByClassName('filter_item');
const close = document.querySelector('#close');
const closeAll = document.querySelector('#close_all');
const dropdown1 = document.querySelector ('#dropdownMenuLink1');
const dropdown2 = document.querySelector ('#dropdownMenuLink2');
const dropdown3 = document.querySelector ('#dropdownMenuLink3');
const dropdown4 = document.querySelector ('#dropdownMenuLink4');
const dropdownmenu = document.getElementsByClassName('dropdown-menu');


closeAll.onclick = function(){
    dropdownmenu[0].classList.remove('show');
    dropdownmenu[1].classList.remove('show');
    dropdownmenu[2].classList.remove('show');
    dropdownmenu[3].classList.remove('show');
}
dropdown1.onclick =function(){
    dropdownmenu[0].classList.toggle('show')
}
dropdown2.onclick =function(){
    dropdownmenu[1].classList.toggle('show')
}
dropdown3.onclick =function(){
    dropdownmenu[2].classList.toggle('show')
}
dropdown4.onclick =function(){
    dropdownmenu[3].classList.toggle('show')
}
close.onclick = function(){
    filterDiv[0].classList.remove('active');
    document.getElementsByClassName('index')[0].classList.remove('main')
}

filterBtn.onclick = function(){
    filterDiv[0].classList.add('active');
    document.getElementsByClassName('index')[0].classList.add('main')
} 
    function widthFun(x) {
        if (x.matches) {
            for (let i = 0; i < 9; i++) {
                list[i].classList.remove('col-12');
                list[i].classList.add('col-lg-4');
                list[i].classList.add('col-md-6');
                view[i].classList.remove('flex-row');
                view[i].classList.add('flex-column');
                listViewButton.classList.remove('active');
                gridViewButton.classList.add('active');
            }
            }
    }
    widthFun(x)
    x.addListener(widthFun)
    gridViewButton.onclick = function () {
        for (let i = 0; i < 9; i++) {
            list[i].classList.remove('col-12');
            list[i].classList.add('col-lg-4');
            list[i].classList.add('col-md-6');
            view[i].classList.remove('flex-row');
            view[i].classList.add('flex-column');
            listViewButton.classList.remove('active');
            gridViewButton.classList.add('active');
        }
    }

    listViewButton.onclick = function () {
        for (let i = 0; i < 9; i++) {
            list[i].classList.remove('col-lg-4');
            list[i].classList.remove('col-md-6');
            list[i].classList.add('col-12');
            view[i].classList.remove('flex-column');
            view[i].classList.add('flex-row');
            gridViewButton.classList.remove('active');
            listViewButton.classList.add('active');
        }
    }
};