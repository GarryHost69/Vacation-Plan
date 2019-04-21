function changeVisibility() {
    var im = document.getElementById("pas-image");
    var pwd = document.getElementById("pas");
    switch (im.name) {
        case "open" :	im.src = "./img/close.png";
                        pwd.type = "text";
                        im.name = "close";
                        pwd.style.marginLeft = "1.6%";
                        break;
        case "close": 	im.src = "./img/open.png";
                        pwd.type = "password";
                        im.name = "open";
                        break;
    }
    pwd.style.marginLeft = '0px';
}
