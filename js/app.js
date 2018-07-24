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
        mapTooltip.style.top = e.pageY - 160 +'px';
        mapTooltip.style.display = "block";

    }));
    markers.forEach(marker => marker.addEventListener('mousemove', (e) => {
        mapTooltip.style.left = e.pageX - 570 + 'px';
        mapTooltip.style.top = e.pageY - 160 + 'px'
    }));

    markers.forEach(marker => marker.addEventListener('mouseout', () => {
        mapTooltip.innerHTML = '';
        mapTooltip.style.display = "none";
    }));
});
