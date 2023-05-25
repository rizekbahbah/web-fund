function logInOut(element) {
    switch (element.innerText) {
        case 'Logout':
            element.innerText = 'Login';
            break;
        case 'Login':
            element.innerText = 'Logout';
            break;
        default:
            element.innerText = 'Login';
    }
};

function remove(element) {
    element.remove();
};

function runAlert(element) {
    element.innerText = parseInt(element.innerText, 10) + 1 + ' likes';
    setTimeout(function () {
        alert('Ninja was liked')
    }, 10);
};