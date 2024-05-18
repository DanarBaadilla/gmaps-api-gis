let map;
let marker;

function initMap() {
    const centerCoords = { lat: -8.7467357, lng: 115.1668024 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoords,
        zoom: 14,
    });

    marker = new google.maps.Marker({
        position: centerCoords,
        map: map,
        draggable: true,
    });

    const infoWindow = new google.maps.InfoWindow();

    marker.addListener('dragend', function(event) {
        const newPosition = event.latLng;
        infoWindow.setContent(`Koordinat: ${newPosition.lat()}, ${newPosition.lng()}`);
        infoWindow.open(map, marker);
    });

    marker.addListener('click', function() {
        infoWindow.setContent("Ini adalah Marker");
        infoWindow.open(map, marker);
    });
}

function loadScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBIXQ0er_mDLFjObPISaCNMcItTFHMnQnI&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

loadScript();
