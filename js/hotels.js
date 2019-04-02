var table, rooms, adults, children, country, checkin, checkout;

window.onload = function() {
    table = document.getElementById("ht");
    rooms = localStorage.getItem('rooms');
    adults = localStorage.getItem('adults');
    children = localStorage.getItem('children');
    country = localStorage.getItem('country');
    checkin = localStorage.getItem('checkin');
    checkout = localStorage.getItem('checkout');
    var fhotel = getHotels();
    fhotel.forEach(hotel => {
        if (hotel.Location.includes(country)) {
            table.innerHTML += "<tr><td>" + hotel.Company + "</td><td>" + hotel.deal + "</td><td>" + country + "</td><td><button type='button' class='tb'>Book</button></td><tr>";
        }
        else {
            table.innerHTML += "<tr><td>" + hotel.Company + "</td><td>" + hotel.deal + "</td><td>Worldwide</td><td><button type='button' class='tb'>Book</button></td><tr>";
        }
    }) 
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getHotels() {
    var finalHotel = [];
    hotels.forEach(hotel => {
        for (var i = 0; i < hotel.Location.length; i++) {
            if (hotel.Location[i] == country) {
                hotel.deal = random(250, 1000) + '$';
                finalHotel.push(hotel);
                break;
            }
            if (hotel.Location[i] == 'Worldwide') {
                hotel.deal = random(250, 1000) + '$';
                finalHotel.push(hotel);
                break;
            }
        }
    });
    return finalHotel;
}

var hotels = [
    {
        "Company": "OYO",
        "Location": ["Worldwide"]
    },
    {
        "Company": "AccorHotels",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Aman Resorts",
        "Location": ["Singapore"]
    },
    {
        "Company": "APA Group",
        "Location": ["Japan", "United States", "Canada"]
    },
    {
        "Company": "The Ascott Limited",
        "Location": ["America", "Asia Pacific", "Europe", "Middle East"]
    },
    {
        "Company": "Banyan Tree Holdings",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Barrière",
        "Location": ["France", "Morocco"]
    },
    {
        "Company": "Best Western Hotels",
        "Location": ["Worldwide"]
    },
    {
        "Company": "BTG Homeinn hotel group",
        "Location": ["China"]
    },
    {
        "Company": "Radisson Hotel Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "China Lodging Group, Limited (Huazhu Hotels Group)",
        "Location": ["China"]
    },
    {
        "Company": "Choice Hotels",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Coast Hotels",
        "Location": ["Canada", "United States"]
    },
    {
        "Company": "Dalata Hotel Group",
        "Location": ["Ireland", "United Kingdom"]
    },
    {
        "Company": "Dorchester Collection",
        "Location": ["Europe", "United States"]
    },
    {
        "Company": "Drury Hotels",
        "Location": ["United States"]
    },
    {
        "Company": "Dusit Thani Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Extended Stay America, Inc.",
        "Location": ["United States", "Canada"]
    },
    {
        "Company": "Four Seasons Hotels and Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "G6 Hospitality LLC",
        "Location": ["United States", "Canada", "Latin America"]
    },
    {
        "Company": "GreenTree Inns Hotel Management Group, Inc.",
        "Location": ["China", "United States"]
    },
    {
        "Company": "Hilton Worldwide",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Hongkong and Shanghai Hotels",
        "Location": ["Asia-Pacific, North America, Europe"]
    },
    {
        "Company": "Hoshino Resorts",
        "Location": ["Japan", "Indonesia"]
    },
    {
        "Company": "Hyatt Hotels Corporation",
        "Location": ["Worldwide"]
    },
    {
        "Company": "InterContinental Hotels Group (IHG)",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Interstate Hotel & Resorts",
        "Location": ["United States", "Europe"]
    },
    {
        "Company": "InTown Suites",
        "Location": ["United States"]
    },
    {
        "Company": "Jin Jiang International",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Jumeirah",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Kempinski",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Langham Hospitality Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Loews Hotels",
        "Location": ["United States"]
    },
    {
        "Company": "Lotte Hotels & Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Magnuson Hotels",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Mandarin Oriental Hotel Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Marriott International",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Meliá Hotels International, S.A.",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Millennium & Copthorne Hotels",
        "Location": ["Worldwide"]
    },
    {
        "Company": "MGM Resorts International",
        "Location": ["Asia", "United States"]
    },
    {
        "Company": "Minor Hotels",
        "Location": ["Asia Pacific", "Europe", "Middle East", "Africa"]
    },
    {
        "Company": "NH Hotel Group[52]",
        "Location": ["Europe", "America", "Africa", "China"]
    },
    {
        "Company": "The Oberoi Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Okura Nikko Hotel Management[54]",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Omni Hotels & Resorts",
        "Location": ["United States", "Canada", "Mexico"]
    },
    {
        "Company": "Pan Pacific Hotels and Resorts",
        "Location": ["Asia-Pacific", "United States", "Canada"]
    },
    {
        "Company": "Prince Hotels",
        "Location": ["Japan", "Taiwan", "China", "United States"]
    },
    {
        "Company": "Red Lion Hotels Corporation",
        "Location": ["United States"]
    },
    {
        "Company": "Red Roof Inn",
        "Location": ["United States", "Brazil", "Canada", "Thailand", "Japan"]
    },
    {
        "Company": "RIU Hotels & Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Rocco Forte Hotels",
        "Location": ["Asia", "Europe"]
    },
    {
        "Company": "Rosewood Hotel Group",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Scandic Hotels",
        "Location": ["Sweden", "Norway", "Denmark", "Finland", "Germany", "Poland", "Belgium"]
    },
    {
        "Company": "Shangri-La Hotels and Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Shilo Inns",
        "Location": ["United States"]
    },
    {
        "Company": "Taj Hotels Resorts and Palaces",
        "Location": ["India", "United States", "South Africa", "United Kingdom", "Australia"]
    },
    {
        "Company": "The Dedica Anthology Hotels",
        "Location": ["Europe"]
    },
    {
        "Company": "Tokyu Hotels",
        "Location": ["Japan", "Taiwan", "United States"]
    },
    {
        "Company": "Toyoko Inn",
        "Location": ["Japan"]
    },
    {
        "Company": "Travelodge",
        "Location": ["United Kingdom", "Ireland", "Spain"]
    },
    {
        "Company": "Treebo",
        "Location": ["India"]
    },
    {
        "Company": "Warwick Hotels and Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Westgate Resorts",
        "Location": ["United States"]
    },
    {
        "Company": "Wyndham Hotels & Resorts",
        "Location": ["Worldwide"]
    },
    {
        "Company": "Whitbread plc",
        "Location": ["China", "Dubai", "Europe", "India", "Ireland", "Russia", "United Kingdom"]
    }
];