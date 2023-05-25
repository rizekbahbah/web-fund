function hidePopUp(){
    var element = document.getElementById('popUp');
    element.remove();
}

function changeImg(){
    var element = document.getElementById('mainImg');
    element.src = 'assets/succulents-2.jpg';
}

function returnImg(){
    var element = document.getElementById('mainImg');
    element.src = 'assets/succulents-1.jpg';
}

function clearSearch(){
    var element = document.getElementById('search');
    element.value = '';
}

function returnFiller(){
    var element = document.getElementById('search');
    element.value = 'Search for Anything';
}