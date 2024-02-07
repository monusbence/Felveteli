"use strict"
let adat = [
    {
        "OM_Azonosito": "78655218932",
        "Neve": "Szabó Anna",
        "ErtesitesiCime": "Budapest, Gellért tér 15.",
        "Email": "anna@example.com",
        "SzuletesiDatum": "1998-07-19T00:00:00",
        "Matematika": 14,
        "Magyar": 35
    },
    {
        "OM_Azonosito": "15963702584",
        "Neve": "Nagy Zsófia",
        "ErtesitesiCime": "Debrecen, Szent István utca 8.",
        "Email": "zsofia@example.com",
        "SzuletesiDatum": "2000-02-22T00:00:00",
        "Matematika": 27,
        "Magyar": 4
    },
    {
        "OM_Azonosito": "30351479261",
        "Neve": "Kovács Máté",
        "ErtesitesiCime": "Szeged, Erzsébet körút 45.",
        "Email": "mate@example.com",
        "SzuletesiDatum": "1995-11-29T00:00:00",
        "Matematika": 48,
        "Magyar": 15
    },
    {
        "OM_Azonosito": "97401028543",
        "Neve": "Tóth Bence",
        "ErtesitesiCime": "Pécs, Váci utca 33.",
        "Email": "bence@example.com",
        "SzuletesiDatum": "1997-03-17T00:00:00",
        "Matematika": 8,
        "Magyar": 47
    },
    {
        "OM_Azonosito": "88765031624",
        "Neve": "Horváth Eszter",
        "ErtesitesiCime": "Székesfehérvár, Bartók Béla út 12.",
        "Email": "eszter@example.com",
        "SzuletesiDatum": "1996-09-08T00:00:00",
        "Matematika": 34,
        "Magyar": 7
    },
    {
        "OM_Azonosito": "64189075351",
        "Neve": "Kiss Attila",
        "ErtesitesiCime": "Miskolc, József Attila utca 18.",
        "Email": "attila@example.com",
        "SzuletesiDatum": "1993-12-05T00:00:00",
        "Matematika": 13,
        "Magyar": 48
    },
    {
        "OM_Azonosito": "18734250658",
        "Neve": "Fekete Laura",
        "ErtesitesiCime": "Győr, Széchenyi tér 9.",
        "Email": "laura@example.com",
        "SzuletesiDatum": "1999-06-30T00:00:00",
        "Matematika": 2,
        "Magyar": 30
    },
    {
        "OM_Azonosito": "51698072427",
        "Neve": "Bíró Gábor",
        "ErtesitesiCime": "Kecskemét, Deák Ferenc utca 21.",
        "Email": "gabor@example.com",
        "SzuletesiDatum": "1994-10-14T00:00:00",
        "Matematika": 9,
        "Magyar": 33
    },
    {
        "OM_Azonosito": "60157349268",
        "Neve": "Mészáros Péter",
        "ErtesitesiCime": "Nyíregyháza, Petőfi Sándor utca 26.",
        "Email": "peter@example.com",
        "SzuletesiDatum": "2001-04-01T00:00:00",
        "Matematika": 36,
        "Magyar": 21
    },
    {
        "OM_Azonosito": "72948316750",
        "Neve": "Varga Noémi",
        "ErtesitesiCime": "Szombathely, Kossuth Lajos utca 3.",
        "Email": "noemi@example.com",
        "SzuletesiDatum": "1992-08-18T00:00:00",
        "Matematika": 24,
        "Magyar": 23
    },
    {
        "OM_Azonosito": "84052731649",
        "Neve": "Lakatos Dóra",
        "ErtesitesiCime": "Veszprém, Ady Endre utca 7.",
        "Email": "dora@example.com",
        "SzuletesiDatum": "2000-01-03T00:00:00",
        "Matematika": 43,
        "Magyar": 41
    },
    {
        "OM_Azonosito": "85273941680",
        "Neve": "Németh Tamás",
        "ErtesitesiCime": "Szolnok, Béke tér 14.",
        "Email": "tamas@example.com",
        "SzuletesiDatum": "1998-05-27T00:00:00",
        "Matematika": 5,
        "Magyar": 49
    },
    {
        "OM_Azonosito": "41593260701",
        "Neve": "Orbán Katalin",
        "ErtesitesiCime": "Eger, Szabadság utca 32.",
        "Email": "katalin@example.com",
        "SzuletesiDatum": "1996-02-11T00:00:00",
        "Matematika": 37,
        "Magyar": 20
    },
    {
        "OM_Azonosito": "10486732952",
        "Neve": "Simon Balázs",
        "ErtesitesiCime": "Debrecen, Király utca 28.",
        "Email": "balazs@example.com",
        "SzuletesiDatum": "1995-07-07T00:00:00",
        "Matematika": 20,
        "Magyar": 48
    },
    {
        "OM_Azonosito": "92740581643",
        "Neve": "Papp Viktória",
        "ErtesitesiCime": "Kaposvár, Alkotmány utca 5.",
        "Email": "viktor@example.com",
        "SzuletesiDatum": "1997-11-24T00:00:00",
        "Matematika": 32,
        "Magyar": 9
    },
    {
        "OM_Azonosito": "10637851454",
        "Neve": "Molnár Zoltán",
        "ErtesitesiCime": "Szekszárd, Párizsi utca 17.",
        "Email": "zoltan@example.com",
        "SzuletesiDatum": "1993-01-16T00:00:00",
        "Matematika": 3,
        "Magyar": 46
    },
    {
        "OM_Azonosito": "44025967885",
        "Neve": "Fekete Márton",
        "ErtesitesiCime": "Pécs, Rákóczi út 13.",
        "Email": "marton@example.com",
        "SzuletesiDatum": "1992-04-29T00:00:00",
        "Matematika": 42,
        "Magyar": 31
    },
    {
        "OM_Azonosito": "30381425616",
        "Neve": "Pál Júlia",
        "ErtesitesiCime": "Sopron, Szent Gellért tér 10.",
        "Email": "julia@example.com",
        "SzuletesiDatum": "1999-09-02T00:00:00",
        "Matematika": 49,
        "Magyar": 19
    },
    {
        "OM_Azonosito": "65082317920",
        "Neve": "Takács Orsolya",
        "ErtesitesiCime": "Eger, Andrássy út 22.",
        "Email": "orsolya@example.com",
        "SzuletesiDatum": "1994-06-13T00:00:00",
        "Matematika": 31,
        "Magyar": 18
    },
    {
        "OM_Azonosito": "15374680221",
        "Neve": "Kovács Ádám",
        "ErtesitesiCime": "Székesfehérvár, Bajnai út 8.",
        "Email": "adam@example.com",
        "SzuletesiDatum": "1996-08-06T00:00:00",
        "Matematika": 18,
        "Magyar": 10
    }
];



// Az input mező tartalmát alapul véve keres az OM Azonosítók között
function searchOMById() {
    // Az input mező értékét kisbetűsre konvertáljuk
    var input = document.getElementById('omIdInput').value.toLowerCase();
    
    // Az adatok között szűrjük azokat, amelyek tartalmazzák a keresett azonosítót
    var filteredData = adat.filter(function (item) {
        return item.OM_Azonosito.toLowerCase().includes(input);
    });

    // Ellenőrizzük, hogy van-e találat
    if (filteredData.length === 0) {
        // Ha nincs találat, akkor a textbox háttérszínét pirosra állítjuk
        document.getElementById('omIdInput').style.backgroundColor = 'red';

        // Kiírjuk a hibaüzenetet a "hiba" label-be
        document.getElementById('hiba').innerText = 'Nincs találat a megadott azonosítóra vagy hibásan adtad meg!';
    } else {
        // Ha van találat, akkor visszaállítjuk a textbox háttérszínét
        document.getElementById('omIdInput').style.backgroundColor = '';

        // Töröljük a hibaüzenetet a "hiba" label-ből
        document.getElementById('hiba').innerText = '';

        // A szűrt adatokat továbbítjuk a táblázat megjelenítéséért felelős függvénynek
        displayTable(filteredData);
    }
}
 


// A táblázatot megjelenítő függvény
function displayTable(filteredData) {
    // A táblázat törzsét kiválasztjuk
    var tableBody = document.querySelector('#resultTable tbody');
    
    // A táblázat törzsét ürítjük
    tableBody.innerHTML = '';

    // Az összefűzött adatokat soronként hozzáadjuk a táblázathoz
    filteredData.forEach(function (item) {
        // Sor létrehozása
        var row = tableBody.insertRow();

        // Az adatokat cellánként hozzáadjuk a sorhoz
        for (var key in item) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(item[key]));
        }
    });
}


displayTable(adat);

window.addEventListener('load', function () {
    // Hide the loading overlay after 5 seconds
    setTimeout(function () {
        document.getElementById('loading-overlay').style.display = 'none';
    }, 3000);
});