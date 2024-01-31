function searchOM() {
    var omInput = document.getElementById("omInput").value;
    var resultDiv = document.getElementById("result");

    // Formai ellenőrzés
    if (omInput.length !== 11 || isNaN(omInput)) {
        resultDiv.innerHTML = "<div id='error'>Hibás OM azonosító! Csak pontosan 11 számjegy engedélyezett.</div>";
        return;
    }

    // OM azonosító keresése (ezt a részt a saját igényeidnek megfelelően kell implementálni)
    var result = searchOMById(omInput);

    if (result) {
        // Táblázat készítése
        var tableHtml = "<table><tr><th>OM Azonosító</th><th>Név</th><th>Értesítési Cím</th><th>Email</th><th>Születési Dátum</th><th>Matek Pontszám</th><th>Magyar Pontszám</th></tr>";
        tableHtml += "<tr><td>" + result.OM_Azonosito + "</td><td>" + result.Neve + "</td><td>" + result.ErtesitesiCime + "</td><td>" + result.Email + "</td><td>" + result.SzuletesiDatum + "</td><td>" + result.Matematika + "</td><td>" + result.Magyar + "</td></tr>";
        tableHtml += "</table>";

        resultDiv.innerHTML = tableHtml;
    } else {
        resultDiv.innerHTML = "<div id='error'>Nincs találat az adott OM azonosítóra!</div>";
    }
}

// Dummy adatokkal működő példa, ezt cseréld ki a saját adatbázis-kezelésedre
function searchOMById(omId) {
    // Példa adatok
    var data = [
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

    var result = data.find(function (item) {
        return item.OM_Azonosito === omId;
    });

    return result || null;
}
