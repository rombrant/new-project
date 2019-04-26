ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.75,
        longitude: 37.58,

    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [55.75,37.58],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: '<p class="hint"></p>',
                baloonContent: '<p class="baloon">Новый Арбат 22</p>'
            },
                
            {
                iconLayout: 'default#image',
                iconImageHref: '2cc672ef030321c941f73c8e86a04d9d.png',
                iconImageOffset: [-23, -57],
                iconImageSize: [57, 57]
            });
            map.geoObjects.add(geoObjects[i]);
    };


}