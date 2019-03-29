
var backtotop, travellers, checkin, checkout, date, setter, people, adults = 1, room = 1, children = 0;
var removeAdults, removeChildren, removeRoom, ad, ch, rm, addAdults, addChildren, addRoom;

window.onload = function() {
    var bg1 = document.getElementById('bg1'),
    bg2 = document.getElementById('bg2'),
    bg3 = document.getElementById('bg3'),
    bg4 = document.getElementById('bg4'),
    bg5 = document.getElementById('bg5');
    setter = document.getElementById('travellers');
    backtotop = document.getElementById('backtotop');
    people = document.getElementById('people');
    travellers = document.getElementById('travellers');
    checkin = document.getElementById("checkin");
    checkout = document.getElementById("checkout");
    removeAdults = document.getElementById("ad-");
    removeChildren = document.getElementById("ch-");
    removeRoom = document.getElementById("rm-");
    ad = document.getElementById("adults");
    ch = document.getElementById("children");
    rm = document.getElementById("room");
    addRoom = document.getElementById("rm+");
    addChildren = document.getElementById("ch+");
    addAdults = document.getElementById("ad+");
    date = new Date();
    var min = date.getFullYear() + "-" + "0" + (parseInt(date.getMonth()) + 1) + "-" + date.getDate();
    bg1.style.backgroundImage = "url(img/index1.jpg)";
    bg2.style.backgroundImage = "url(img/index2.jpg)";
    bg3.style.backgroundImage = "url(img/index3.jpg)";
    bg4.style.backgroundImage = "url(img/index4.jpg)";
    bg5.style.backgroundImage = "url(img/index5.jpg)";
    travellers.innerHTML = "1 Adult, 1 Room";
    checkin.min = min;
    checkout.min = min;
    people.style.display = "none";
}

function showSetter() {
    if (people.style.display == "none" && event.srcElement.className == "travellerButton") {
        people.style.display = "block";
    }
    else 
    if (event.srcElement.id == "people" || event.srcElement.parentNode.id == "people" || event.srcElement.parentNode.parentNode.id == "people") {
        if (event.srcElement.type != "button") {
            people.style.display = "block";    
        }
    }
    else {
        people.style.display = "none";
    }
    event.stopPropagation();
}

window.addEventListener('scroll', function showButton() {
    if (window.pageYOffset > 100) {
        backtotop.style.display = "block";
        backtotop.style.animation = "buttonAnimation1 0.5s";
        html.style.scrollBehavior = "smooth";
    }
    else {
        backtotop.style.animation = "buttonAnimation2 0.50s";
        backtotop.style.display = "none";
        html.style.scrollBehavior = "";
    }
});

function backToTop() {
    window.scrollTo(0, 0);
}

function update() {
    switch (event.srcElement.id) {
        case "ad-": adults--;
                    if (adults == 1) {
                        removeAdults.disabled = true;
                        removeAdults.style.borderColor = "silver";
                    }
                    if (adults < 9) {
                        addAdults.disabled = false;
                        addAdults.style.borderColor = "black";
                    }
                    break;
        case "ad+": if (adults == 1) {
                        removeAdults.disabled = false;
                        removeAdults.style.borderColor = "black";
                    }
                    if (adults < 9) {
                        adults++;
                    }
                    if (adults == 9) {
                        addAdults.disabled = true;
                        addAdults.style.borderColor = "silver";
                    }
                    break;
        case "ch-": children--;
                    if (children == 0) {
                        removeChildren.disabled = true;
                        removeChildren.style.borderColor = "silver";
                    }
                    if (children < 9) {
                        addChildren.disabled = false;
                        addChildren.style.borderColor = "black";
                    }
                    break;
        case "ch+": if (children == 0) {
                        removeChildren.disabled = false;
                        removeChildren.style.borderColor = "black";
                    }
                    if (children < 9) {
                        children++;
                    }
                    if (children == 9) {
                        addChildren.disabled = true;
                        addChildren.style.borderColor = "silver";
                    }
                    break;
        case "rm-": room--;
                    if (room == 1) {
                        removeRoom.disabled = true;
                        removeRoom.style.borderColor = "silver";
                    }
                    if (room < 9) {
                        addRoom.disabled = false;
                        addRoom.style.borderColor = "black";
                    }
                    break;
        case "rm+": if (room == 1) {
                        removeRoom.disabled = false;
                        removeRoom.style.borderColor = "black";
                    }
                    if (room < 9) {
                        room++;
                    }
                    if (room == 9) {
                        addRoom.disabled = true;
                        addRoom.style.borderColor = "silver";
                    }
                    break;
    }
    ad.innerText = adults;
    rm.innerText = room;
    ch.innerText = children;
    var msg;
    if (children > 0) {
        if (room > 1 && adults > 1) {
            msg = adults + " Adults, " + children + " Children, " + room + "Rooms";
        }
        else 
        if (room > 1 && adults <= 1) {
            msg = adults + " Adult, " + children + " Children, " + room + "Rooms";
        }
        else 
        if (room <= 1 && adults > 1) {
            msg = adults + " Adults, " + children + " Children, " + room + "Room";
        }
        else {
            msg = adults + " Adult, " + children + " Children, " + room + "Room";
        }
    }
    else {
        if (adults > 1 && room > 1) {
            msg = adults + " Adults, " + room + " Rooms";
        }
        else 
        if (room > 1 && adults <= 1) {
            msg = adults + " Adult, " + room + " Rooms";
        }
        else 
        if (room <= 1 && adults > 1) {
            msg = adults + " Adults, " + room + " Room";
        } 
        else {
            msg = adults + " Adult, " + room + " Room";
        }
    }
    travellers.innerText = msg;
}

function changeBorderColor() {
    if (event.srcElement.disabled == false) {
        event.srcElement.style.borderColor = "black";
    }
}