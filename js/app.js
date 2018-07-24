/*
Zadanie:
-------------

w pliku html mamy mapę.
Dołączone są też 2 skrypty: cities.js i app.js
W tym pierwszym jest tablica z miastami - nie musisz go ruszać, ale przejrzeć powinieneś.

Naszym zadaniem jest:

1)
zrobienie pętli po tej tablicy
i wygenerowanie dla każdego elementu tablicy elementu:

<a
    href="http://www.poznan.pl/"
    class="map-marker"
    data-name="Poznań"
    data-population="542689"
    style="left: 180px; top: 270px;"
>Poznań</a>

Wykorzystaj tutaj dataset, classList, style itp.

Wygenerowany element wrzuć do mapy. Wszystkie dane potrzebne do wygenerowania takiego elementu są w tablicy.

2)
Wygenerowanie elementu i wrzucenie go do body:
<div class="map-tooltip" style="left: -9999px; top: -9999px"></div>


3)
Złapanie wygenerowanych wcześniej markerów (.map-marker)
Dla każdego takiego markera podepnijmy zdarzenia:
a) mouseover:
    - niech wypełnia go html:
        <h2>Nazwa miasta</h2>
        <div>Population: <strong>Populacja miasta</strong></div>
    - niech ustawia go w pozycji kursora myszki (dodajć + 30 do x i y)
    - niech pokazuje tooltipa
b) mousemove:
    - niech ustawia tooltipa w pozycji kursora myszki (dodać + 30 do x i y)
c) mouseout:
    - niech czyści html tooltipa ("")
    - niech ukrywa toolip
*/
document.addEventListener('DOMContentLoaded', function () {

    let map = document.querySelector('.map');
    const mapTooltip = document.createElement('div');
    Object.assign(mapTooltip, {
        className: "map-tooltip",
        style: "left: -9999px; top: -9999px"
    });


    for (let i = 0; i < cities.length; i++) {
        let city = document.createElement('a');

        Object.assign(city, {
            href: `${cities[i].href}`,
            className: 'map-marker',
            style: `left: ${cities[i].map_x}px; top: ${cities[i].map_y}px;`
        });
        city.dataset.name = `${cities[i].name}`;
        city.dataset.population = `${cities[i].population}`;
        city.innerHTML = `${cities[i].name}`
        map.appendChild(city);

    }

    map.appendChild(mapTooltip);

    const markers = document.querySelectorAll('.map-marker');

    markers.forEach(marker => marker.addEventListener('mouseover', (e) => {

        mapTooltip.innerHTML = `
            <h2>${e.target.innerHTML}</h2>
            <div>Population: <strong>${e.target.dataset.population}</strong></div>
        `
        mapTooltip.style.left = e.pageX - 570 + 'px';
        mapTooltip.style.top = e.pageY - 30 + 'px';
        mapTooltip.style.display = "block";

    }));
    markers.forEach(marker => marker.addEventListener('mousemove', (e) => {
        mapTooltip.style.left = e.pageX - 570 + 'px';
        mapTooltip.style.top = e.pageY - 30 + 'px'
    }));

    markers.forEach(marker => marker.addEventListener('mouseout', () => {
        mapTooltip.innerHTML = '';
        mapTooltip.style.display = "none";
    }));
});
