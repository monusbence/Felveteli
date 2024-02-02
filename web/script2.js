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



function searchOMById() {
    var omInput = document.getElementById('omIdInput').value.toLowerCase();
    var nevInput = document.getElementById('nevInput').value.toLowerCase();

    var filteredData = adat.filter(function (item) {
        return item.OM_Azonosito.toLowerCase().startsWith(omInput) && item.Neve.toLowerCase().startsWith(nevInput);
    });

    if (filteredData.length === 0) {
        document.getElementById('omIdInput').style.backgroundColor = 'red';
        document.getElementById('nevInput').style.backgroundColor = 'red';
        document.getElementById('hiba').innerText = 'Nincs találat a megadott azonosítóra vagy névre vagy hibásan adtad meg!';
        clearCards();
    } else {
        document.getElementById('omIdInput').style.backgroundColor = '';
        document.getElementById('nevInput').style.backgroundColor = '';
        document.getElementById('hiba').innerText = '';
        displayCards(filteredData);
        updateSearchResults(filteredData);
    }
}

function displayCards(filteredData) {
    var cardContainer = document.getElementById('cardContainer');

    if (filteredData.length > 0) {
        cardContainer.innerHTML = '';
    }

    filteredData.forEach(function (item) {
        if (!isDuplicateCard(cardContainer, item.OM_Azonosito)) {
            var card = document.createElement('div');
            card.className = 'card';

            for (var key in item) {
                var cardItem = document.createElement('p');
                cardItem.appendChild(document.createTextNode(`${key}: ${item[key]}`));
                card.appendChild(cardItem);
            }

            cardContainer.appendChild(card);
        }
    });
}

function isDuplicateCard(cardContainer, omAzonosito) {
    var existingCards = cardContainer.getElementsByClassName('card');
    for (var i = 0; i < existingCards.length; i++) {
        var existingCard = existingCards[i];
        if (existingCard.children.length > 0 && existingCard.children[0].innerText.includes(omAzonosito)) {
            return true;
        }
    }
    return false;
}

function clearCards() {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
}

function updateSearchResults(filteredData) {
    var totalMatematika = 0;
    var totalMagyar = 0;
    var totalPoints = 0;

    filteredData.forEach(function (item) {
        totalMatematika += item.Matematika;
        totalMagyar += item.Magyar;
        totalPoints += item.Matematika + item.Magyar;
    });

    var avgMatematika = totalMatematika / filteredData.length;
    var avgMagyar = totalMagyar / filteredData.length;
    var avgPoints = totalPoints / filteredData.length;

    document.getElementById('tetelekSzama').innerText = 'Listában lévő elemek száma: ' + filteredData.length;
    document.getElementById('MatekAtlaga').innerText = 'Matek pontok átlaga: ' + avgMatematika.toFixed(1);
    document.getElementById('MagyarAtlaga').innerText = 'Magyar pontok átlaga: ' + avgMagyar.toFixed(1);
    document.getElementById('OsszAtlag').innerText = 'Összpontszám átlaga: ' + avgPoints.toFixed(1);
}

displayCards(adat);