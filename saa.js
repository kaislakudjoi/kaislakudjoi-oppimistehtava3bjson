fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        // kutsutaan saa-funktiota
        saa(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })


function saa(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
    // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = "<li>" + "Kaupunki: " + data.name + "</li>";
    teksti = teksti + "<li>" + "Sää: " + data.weather[0].description + "</li>";
    teksti = teksti + "<li>" + "Lämpötila: " + data.main.temp + "</li>";
    teksti = teksti + "<li>" + "Tuulen nopeus:  " + data.wind.speed + "</li>";
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";

    // tähän tulee muiden tietojen käsittely
    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
}

fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        // kutsutaan saa-funktiota
        saa2(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus2").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })


function saa2(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
    // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = "<li>" + "Kaupunki: " + data.name + "</li>";
    teksti = teksti + "<li>" + "Sää: " + data.weather[0].description + "</li>";
    teksti = teksti + "<li>" + "Lämpötila: " + data.main.temp + "</li>";
    teksti = teksti + "<li>" + "Tuulen nopeus:  " + data.wind.speed + "</li>";
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";

    // tähän tulee muiden tietojen käsittely
    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus2").innerHTML = teksti;
}
