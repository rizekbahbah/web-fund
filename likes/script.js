function addLike(element) {

    var x = element.id;

    var y = 'label_' + x;

    var z = document.querySelector('#' + y);

    var num = z.innerText;

    num++;

    z.innerText = num;
}



function addAvatar () {

    var x = document.querySelector('.img_profile-pic');

    var y = x.id;

    if (y == 'img_gen-user') {
        x.src = "./assets/toshiro.png";
        x.id = "img_profile-pic"
    } else {
        x.src = "./assets/user-circle.png"
        x.id = "img_gen-user"
    }
}
