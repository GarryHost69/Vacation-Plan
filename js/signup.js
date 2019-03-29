function validateId() {
    const regx = /^[A-Za-z1-9]+$/;
    var uid = document.getElementById("username");
    if (!(uid.value.match(regx)) && uid.value != "") {
        var x = document.getElementById("snackbar");
        x.style.width = "25%";
        x.style.height = "7%";
        x.style.paddingTop = 14;
        x.innerText = "Username cannot have symbols. Please only use alpha numeric characters.";
        x.className = "show";
        setTimeout(function() {
            x.className = x.className.replace("show", "");
        }, 5000);
        return false;
    }
    return true;
}
function validate() {
    if (validateId() && validatePassword()) {

    }
}
function validatePassword() {
    var pwd = document.getElementById("password");
    if (pwd.value.length > 0 && pwd.value.length < 8) {
        var x = document.getElementById("snackbar");
        x.style.width = "25%";
        x.style.height = "5%";
        x.style.paddingTop = 15;
        x.innerText = "Password must be at least 8 characters long.";
        x.className = "show";
        setTimeout(function() {
            x.className = x.className.replace("show", "");
        }, 5000);
        return false;
    }
    return true;
}
function changeVisibility() {
    var im = document.getElementById("pas-image");
    var pwd = document.getElementById("password");
    switch (im.name) {
        case "open" :	im.src = "close.png";
                        pwd.type = "text";
                        im.name = "close";
                        pwd.style.marginLeft = "1.6%";
                        break;
        case "close": 	im.src = "open.png";
                        pwd.type = "password";
                        im.name = "open";
                        break;
    }
}
