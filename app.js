window.onload = function(){ 

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
}

filterBtn.onclick = function(){
    filterDiv[0].classList.add('active');
}
}