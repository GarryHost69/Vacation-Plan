
var backtotop, travellers, checkin, checkout, date, setter, people, adults = 1, room = 1, children = 0;
var removeAdults, removeChildren, removeRoom, ad, ch, rm, addAdults, addChildren, addRoom, search;
var divList = [], toast;

window.onload = function() {
    var bg1 = document.getElementById('bg1'),
    bg2 = document.getElementById('bg2'),
    bg3 = document.getElementById('bg3'),
    bg4 = document.getElementById('bg4'),
    bg5 = document.getElementById('bg5'),
    bg6 = document.getElementById('bg6'),
    bg7 = document.getElementById('bg7');
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
    search = document.getElementById("countrySearch");
    toast = document.getElementById("toast");
    date = new Date();
    var min;
    if ((date.getMonth() + 1).toString().length < 2) {
        if (date.getDate().toString().length < 2) {
            min = date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + "0" + date.getDate();
        }
        else {
            min = date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + date.getDate();
        }
    }
    else {
        if (date.getDate().toString().length < 2) {
            min = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "0" + date.getDate();
        }
        else {
            min = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
    }
    bg1.style.backgroundImage = "url(img/index1.jpg)";
    bg2.style.backgroundImage = "url(img/index2.jpg)";
    bg3.style.backgroundImage = "url(img/index3.jpg)";
    bg4.style.backgroundImage = "url(img/index4.jpg)";
    bg5.style.backgroundImage = "url(img/index5.jpg)";
    travellers.innerHTML = "1 Adult, 1 Room";
    checkin.min = min;
    checkout.min = min;
    people.style.display = "none";

    search.addEventListener('input', function() {
        if (divList.length == 0) {
            var temp = document.getElementById("auto");
            temp.style.display = "block";
            divList.push(temp);
        }
        else {
            removeDiv();
            var temp = document.getElementById("auto");
            temp.style.display = "block";
            divList.push(temp);
        }
        var val = this.value;
        if (val != '') {
            for (var i = 0; i < countries.length; i++) {
                if (countries[i].country.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    if (divList.length == 1) {
                        divList[0].innerHTML = "<h3 style='margin-left: 20px;'>"+ countries[i].country +"</h3>"
                        var div = document.createElement("DIV");
                        div.setAttribute('class', 'autocomplete2');
                        divList[divList.length - 1].appendChild(div);
                        divList.push(div);
                    }
                    else 
                    if (divList.length > 1) {
                        divList[divList.length - 1].innerHTML = "<h3 style='margin-left: 20px;'>"+ countries[i].country +"</h3>"
                        var div = document.createElement("DIV");
                        div.setAttribute('class', 'autocomplete2');
                        divList[divList.length - 1].appendChild(div);
                        divList.push(div);
                    }
                }
            }
            if (divList.length == 1) {
                removeDiv();
            }
            else
            if (divList.length > 1) {
                divList[divList.length - 1].parentNode.removeChild(divList[divList.length - 1]);
                divList.pop();
            }
        }
        else {
            removeDiv();
        }
        for (var i = 0; i < divList.length; i++) {
            divList[i].onmouseover = function() {
                this.style.backgroundColor = 'DodgerBlue';
                event.stopPropagation();       
            }
            divList[i].onmouseout = function() {
                this.style.backgroundColor = 'white';
                event.stopPropagation();
            }
            divList[i].onclick = function() {    
                search.value = this.innerText.split('\n')[0];
                removeDiv();
                event.stopPropagation();
            }
        }
    });

    search.addEventListener('keydown', function() {
        var parent = undefined;
        var child = undefined;
        if (event.keyCode == 40) {
            for (var i = 0; i < divList.length; i++) {
                if (divList[i].style.backgroundColor == 'dodgerblue' && i != divList.length - 1) {
                    parent = divList[i];
                    child = divList[i].children[1];
                    break;
                }
            }
            if (divList[divList.length - 1].style.backgroundColor == 'dodgerblue') {
                parent = divList[divList.length - 1];
                child = divList[0];
            }
            if (parent == undefined) {
                parent = divList[0];
                parent.style.backgroundColor = 'DodgerBlue';
            }  
            else {
                parent.style.backgroundColor = 'white';
                child.style.backgroundColor = 'DodgerBlue';
            }
        }
        else 
        if (event.keyCode == 38) {
            for (var i = 0; i < divList.length; i++) {
                if (divList[i].style.backgroundColor == 'dodgerblue' && i != 0) {
                    child = divList[i];
                    parent = divList[i].parentNode;
                    break;
                }
            }
            if (divList[0].style.backgroundColor == 'dodgerblue') {
                parent = divList[divList.length - 1];
                child = divList[0];
            }
            if (parent == undefined) {
                parent = divList[divList.length - 1];
                parent.style.backgroundColor = 'DodgerBlue';
            }  
            else {
                child.style.backgroundColor = 'white';
                parent.style.backgroundColor = 'DodgerBlue';
            }
        }
        else 
        if (event.keyCode == 13) {
            var temp = undefined;
            for (var i = 0; i < divList.length; i++) {
                if (divList[i].style.backgroundColor == 'dodgerblue') {
                    temp = divList[i];
                    break;
                }
            }
            if (temp != undefined) {
                search.value = temp.innerText.split('\n')[0];
                removeDiv();
            }
        }
    });

    checkin.addEventListener('input', function() {
        var v = this.value.split('-');
        var year = parseInt(v[0]);
        var month = parseInt(v[1]);
        var day = parseInt(v[2]);
        if (month == 12 && day == 31) { 
            month = '01';
            day = '01';
            year = (year += 1).toString();
        }
        else 
        if (year % 4 == 0 && month == 2 && day == 29) {
            day = '01';
            month = '03';
            year = year.toString();
        }
        else 
        if (year % 4 != 0 && month == 2 && day == 28) {
            day = '01';
            month = '03';
            year = year.toString();
        }
        else {
            if (day == 31) {
                day = '01';
                month = (month + 1).toString();
                year = year.toString();
            }
            else 
            if (day == 30) {
                if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    day = (day + 1).toString();
                    month = month.toString();
                    year = year.toString(); 
                }
                else {
                    day = '01';
                    month = (month + 1).toString();
                    year = year.toString();
                }
            }
            else {
                day = (day + 1).toString();
                month = month.toString();
                year = year.toString();
            }
            
        }
        if (day.length == 1) {
            day = '0' + day;
        }
        if (month.length == 1) {
            month = '0' + month;
        }
        var mindate = year + "-" + month + "-" + day;
        console.log(mindate);
        
        checkout.value = mindate;
        checkout.min = mindate;
    });
}

function removeDiv() {
    for (var i = divList.length - 1; i >= 1; i--) {
        divList[i].parentNode.removeChild(divList[i]);
    }
    divList[0].innerHTML = "";
    divList[0].style.display = "none";
    divList = [];
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
                        removeAdults.style.color = "silver";
                        removeAdults.style.borderColor = "silver";
                    }
                    if (adults < 9) {
                        addAdults.disabled = false;
                        addAdults.style.color = "black";
                        addAdults.style.borderColor = "black";
                    }
                    break;
        case "ad+": if (adults == 1) {
                        removeAdults.disabled = false;
                        removeAdults.style.color = "black";
                        removeAdults.style.borderColor = "black";
                    }
                    if (adults < 9) {
                        adults++;
                    }
                    if (adults == 9) {
                        addAdults.disabled = true;
                        addAdults.style.color = "silver";
                        addAdults.style.borderColor = "silver";
                    }
                    break;
        case "ch-": children--;
                    if (children == 0) {
                        removeChildren.disabled = true;
                        removeChildren.style.color = "silver";
                        removeChildren.style.borderColor = "silver";
                    }
                    if (children < 9) {
                        addChildren.disabled = false;
                        addChildren.style.color = "black";
                        addChildren.style.borderColor = "black";
                    }
                    break;
        case "ch+": if (children == 0) {
                        removeChildren.disabled = false;
                        removeChildren.style.color = "black";
                        removeChildren.style.borderColor = "black";
                    }
                    if (children < 9) {
                        children++;
                    }
                    if (children == 9) {
                        addChildren.disabled = true;
                        addChildren.style.color = "silver";
                        addChildren.style.borderColor = "silver";
                    }
                    break;
        case "rm-": room--;
                    if (room == 1) {
                        removeRoom.disabled = true;
                        removeRoom.style.color = "silver";
                        removeRoom.style.borderColor = "silver";
                    }
                    if (room < 9) {
                        addRoom.disabled = false;
                        addRoom.style.color = "black";
                        addRoom.style.borderColor = "black";
                    }
                    break;
        case "rm+": if (room == 1) {
                        removeRoom.disabled = false;
                        removeRoom.style.color = "black";
                        removeRoom.style.borderColor = "black";
                    }
                    if (room < 9) {
                        room++;
                    }
                    if (room == 9) {
                        addRoom.disabled = true;
                        addRoom.style.color = "silver";
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

function verify() {
    if (search.value == '') {
        toast.style.width = "20%";
        toast.style.height = "5%";
        toast.style.paddingTop = 15;
        toast.innerText = "Please Enter a Destination.";
        toast.className = "make";
        setTimeout(function() {
            toast.className = toast.className.replace("make", "");
        }, 5000);
    }
    else 
    if (!validateDestination()) {
        toast.style.width = "20%";
        toast.style.height = "5%";
        toast.style.paddingTop = 15;
        toast.innerText = "Please Enter a Valid Destination.";
        toast.className = "make";
        setTimeout(function() {
            toast.className = toast.className.replace("make", "");
        }, 5000);
    }
    else 
    if (checkin.value == '') {
        toast.style.width = "20%";
        toast.style.height = "5%";
        toast.style.paddingTop = 15;
        toast.innerText = "Please Select a Check In Date.";
        toast.className = "make";
        setTimeout(function() {
            toast.className = toast.className.replace("make", "");
        }, 5000);
    }
    else 
    if (checkout.value == '') {
        toast.style.width = "20%";
        toast.style.height = "5%";
        toast.style.paddingTop = 15;
        toast.innerText = "Please Select a Check Out Date.";
        toast.className = "make";
        setTimeout(function() {
            toast.className = toast.className.replace("make", "");
        }, 5000);
    }
    else {
        var href = './Hotels.html';
        localStorage.setItem('rooms', room);
        localStorage.setItem('adults', adults);
        localStorage.setItem('children', children);
        localStorage.setItem('country', search.value);
        localStorage.setItem('checkin', checkin.value);
        localStorage.setItem('checkout', checkout.value);
        window.location = href;
    }
}

function validateDestination() {
    var val = search.value;
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].country == val) {
            return true;
        }
    }
    return false;
}

function changeBorderColor() {
    if (event.srcElement.disabled == false) {
        event.srcElement.style.borderColor = "black";
    }
}

var countries = [ 
    {
        "country": "Afghanistan"
    },
    {
        "country": "Albania"
    },
    {
        "country": "Algeria"
    },
    {
        "country": "American Samoa"
    },
    {
        "country": "Andorra"
    },
    {
        "country": "Angola"
    },
    {
        "country": "Anguilla"
    },
    {
        "country": "Antarctica"
    },
    {
        "country": "Antigua and Barbuda"
    },
    {
        "country": "Argentina"
    },
    {
        "country": "Armenia"
    },
    {
        "country": "Aruba"
    },
    {
        "country": "Australia"
    },
    {
        "country": "Austria"
    },
    {
        "country": "Azerbaijan"
    },
    {
        "country": "Bahamas"
    },
    {
        "country": "Bahrain"
    },
    {
        "country": "Bangladesh"
    },
    {
        "country": "Barbados"
    },
    {
        "country": "Belarus"
    },
    {
        "country": "Belgium"
    },
    {
        "country": "Belize"
    },
    {
        "country": "Benin"
    },
    {
        "country": "Bermuda"
    },
    {
        "country": "Bhutan"
    },
    {
        "country": "Bolivia"
    },
    {
        "country": "Bosnia and Herzegovina"
    },
    {
        "country": "Botswana"
    },
    {
        "country": "Bouvet Island"
    },
    {
        "country": "Brazil"
    },
    {
        "country": "British Indian Ocean Territory"
    },
    {
        "country": "Brunei"
    },
    {
        "country": "Bulgaria"
    },
    {
        "country": "Burkina Faso"
    },
    {
        "country": "Burundi"
    },
    {
        "country": "Cambodia"
    },
    {
        "country": "Cameroon"
    },
    {
        "country": "Canada"
    },
    {
        "country": "Cape Verde"
    },
    {
        "country": "Cayman Islands"
    },
    {
        "country": "Central African Republic"
    },
    {
        "country": "Chad"
    },
    {
        "country": "Chile"
    },
    {
        "country": "China"
    },
    {
        "country": "Christmas Island"
    },
    {
        "country": "Cocos (Keeling) Islands"
    },
    {
        "country": "Colombia"
    },
    {
        "country": "Comoros"
    },
    {
        "country": "Congo"
    },
    {
        "country": "The Democratic Republic of Congo"
    },
    {
        "country": "Cook Islands"
    },
    {
        "country": "Costa Rica"
    },
    {
        "country": "Ivory Coast"
    },
    {
        "country": "Croatia"
    },
    {
        "country": "Cuba"
    },
    {
        "country": "Cyprus"
    },
    {
        "country": "Czech Republic"
    },
    {
        "country": "Denmark"
    },
    {
        "country": "Djibouti"
    },
    {
        "country": "Dominica"
    },
    {
        "country": "Dominican Republic"
    },
    {
        "country": "East Timor"
    },
    {
        "country": "Ecuador"
    },
    {
        "country": "Egypt"
    },
    {
        "country": "England"
    },
    {
        "country": "El Salvador"
    },
    {
        "country": "Equatorial Guinea"
    },
    {
        "country": "Eritrea"
    },
    {
        "country": "Estonia"
    },
    {
        "country": "Ethiopia"
    },
    {
        "country": "Falkland Islands"
    },
    {
        "country": "Faroe Islands"
    },
    {
        "country": "Fiji Islands"
    },
    {
        "country": "Finland"
    },
    {
        "country": "France"
    },
    {
        "country": "French Guiana"
    },
    {
        "country": "French Polynesia"
    },
    {
        "country": "French Southern territories"
    },
    {
        "country": "Gabon"
    },
    {
        "country": "Gambia"
    },
    {
        "country": "Georgia"
    },
    {
        "country": "Germany"
    },
    {
        "country": "Ghana"
    },
    {
        "country": "Gibraltar"
    },
    {
        "country": "Greece"
    },
    {
        "country": "Greenland"
    },
    {
        "country": "Grenada"
    },
    {
        "country": "Guadeloupe"
    },
    {
        "country": "Guam"
    },
    {
        "country": "Guatemala"
    },
    {
        "country": "Guinea"
    },
    {
        "country": "Guinea-Bissau"
    },
    {
        "country": "Guyana"
    },
    {
        "country": "Haiti"
    },
    {
        "country": "Heard Island and McDonald Islands"
    },
    {
        "country": "Holy See (Vatican City State)"
    },
    {
        "country": "Honduras"
    },
    {
        "country": "Hong Kong"
    },
    {
        "country": "Hungary"
    },
    {
        "country": "Iceland"
    },
    {
        "country": "India"
    },
    {
        "country": "Indonesia"
    },
    {
        "country": "Iran"
    },
    {
        "country": "Iraq"
    },
    {
        "country": "Ireland"
    },
    {
        "country": "Israel"
    },
    {
        "country": "Italy"
    },
    {
        "country": "Jamaica"
    },
    {
        "country": "Japan"
    },
    {
        "country": "Jordan"
    },
    {
        "country": "Kazakstan"
    },
    {
        "country": "Kenya"
    },
    {
        "country": "Kiribati"
    },
    {
        "country": "Kuwait"
    },
    {
        "country": "Kyrgyzstan"
    },
    {
        "country": "Laos"
    },
    {
        "country": "Latvia"
    },
    {
        "country": "Lebanon"
    },
    {
        "country": "Lesotho"
    },
    {
        "country": "Liberia"
    },
    {
        "country": "Libyan Arab Jamahiriya"
    },
    {
        "country": "Liechtenstein"
    },
    {
        "country": "Lithuania"
    },
    {
        "country": "Luxembourg"
    },
    {
        "country": "Macao"
    },
    {
        "country": "Macedonia"
    },
    {
        "country": "Madagascar"
    },
    {
        "country": "Malawi"
    },
    {
        "country": "Malaysia"
    },
    {
        "country": "Maldives"
    },
    {
        "country": "Mali"
    },
    {
        "country": "Malta"
    },
    {
        "country": "Marshall Islands"
    },
    {
        "country": "Martinique"
    },
    {
        "country": "Mauritania"
    },
    {
        "country": "Mauritius"
    },
    {
        "country": "Mayotte"
    },
    {
        "country": "Mexico"
    },
    {
        "country": "Micronesia, Federated States of"
    },
    {
        "country": "Moldova"
    },
    {
        "country": "Monaco"
    },
    {
        "country": "Mongolia"
    },
    {
        "country": "Montserrat"
    },
    {
        "country": "Morocco"
    },
    {
        "country": "Mozambique"
    },
    {
        "country": "Myanmar"
    },
    {
        "country": "Namibia"
    },
    {
        "country": "Nauru"
    },
    {
        "country": "Nepal"
    },
    {
        "country": "Netherlands"
    },
    {
        "country": "Netherlands Antilles"
    },
    {
        "country": "New Caledonia"
    },
    {
        "country": "New Zealand"
    },
    {
        "country": "Nicaragua"
    },
    {
        "country": "Niger"
    },
    {
        "country": "Nigeria"
    },
    {
        "country": "Niue"
    },
    {
        "country": "Norfolk Island"
    },
    {
        "country": "North Korea"
    },
    {
        "country": "Northern Ireland"
    },
    {
        "country": "Northern Mariana Islands"
    },
    {
        "country": "Norway"
    },
    {
        "country": "Oman"
    },
    {
        "country": "Pakistan"
    },
    {
        "country": "Palau"
    },
    {
        "country": "Palestine"
    },
    {
        "country": "Panama"
    },
    {
        "country": "Papua New Guinea"
    },
    {
        "country": "Paraguay"
    },
    {
        "country": "Peru"
    },
    {
        "country": "Philippines"
    },
    {
        "country": "Pitcairn"
    },
    {
        "country": "Poland"
    },
    {
        "country": "Portugal"
    },
    {
        "country": "Puerto Rico"
    },
    {
        "country": "Qatar"
    },
    {
        "country": "Reunion"
    },
    {
        "country": "Romania"
    },
    {
        "country": "Russian Federation"
    },
    {
        "country": "Rwanda"
    },
    {
        "country": "Saint Helena"
    },
    {
        "country": "Saint Kitts and Nevis"
    },
    {
        "country": "Saint Lucia"
    },
    {
        "country": "Saint Pierre and Miquelon"
    },
    {
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "country": "Samoa"
    },
    {
        "country": "San Marino"
    },
    {
        "country": "Sao Tome and Principe"
    },
    {
        "country": "Saudi Arabia"
    },
    {
        "country": "Scotland"
    },
    {
        "country": "Senegal"
    },
    {
        "country": "Seychelles"
    },
    {
        "country": "Sierra Leone"
    },
    {
        "country": "Singapore"
    },
    {
        "country": "Slovakia"
    },
    {
        "country": "Slovenia"
    },
    {
        "country": "Solomon Islands"
    },
    {
        "country": "Somalia"
    },
    {
        "country": "South Africa"
    },
    {
        "country": "South Georgia and the South Sandwich Islands"
    },
    {
        "country": "South Korea"
    },
    {
        "country": "South Sudan"
    },
    {
        "country": "Spain"
    },
    {
        "country": "SriLanka"
    },
    {
        "country": "Sudan"
    },
    {
        "country": "Suriname"
    },
    {
        "country": "Svalbard and Jan Mayen"
    },
    {
        "country": "Swaziland"
    },
    {
        "country": "Sweden"
    },
    {
        "country": "Switzerland"
    },
    {
        "country": "Syria"
    },
    {
        "country": "Tajikistan"
    },
    {
        "country": "Tanzania"
    },
    {
        "country": "Thailand"
    },
    {
        "country": "Togo"
    },
    {
        "country": "Tokelau"
    },
    {
        "country": "Tonga"
    },
    {
        "country": "Trinidad and Tobago"
    },
    {
        "country": "Tunisia"
    },
    {
        "country": "Turkey"
    },
    {
        "country": "Turkmenistan"
    },
    {
        "country": "Turks and Caicos Islands"
    },
    {
        "country": "Tuvalu"
    },
    {
        "country": "Uganda"
    },
    {
        "country": "Ukraine"
    },
    {
        "country": "United Arab Emirates"
    },
    {
        "country": "United Kingdom"
    },
    {
        "country": "United States"
    },
    {
        "country": "United States Minor Outlying Islands"
    },
    {
        "country": "Uruguay"
    },
    {
        "country": "Uzbekistan"
    },
    {
        "country": "Vanuatu"
    },
    {
        "country": "Venezuela"
    },
    {
        "country": "Vietnam"
    },
    {
        "country": "Virgin Islands, British"
    },
    {
        "country": "Virgin Islands, U.S."
    },
    {
        "country": "Wales"
    },
    {
        "country": "Wallis and Futuna"
    },
    {
        "country": "Western Sahara"
    },
    {
        "country": "Yemen"
    },
    {
        "country": "Yugoslavia"
    },
    {
        "country": "Zambia"
    },
    {
        "country": "Zimbabwe"
    }
];
