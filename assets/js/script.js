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

    // Set initial values for latitude and longitude inputs
    document.getElementById('latitude').value = centerCoords.lat;
    document.getElementById('longitude').value = centerCoords.lng;

    const infoWindow = new google.maps.InfoWindow();

    marker.addListener('dragend', function(event) {
        const newPosition = event.latLng;
        document.getElementById('latitude').value = newPosition.lat();
        document.getElementById('longitude').value = newPosition.lng();
        infoWindow.setContent(`Koordinat: ${newPosition.lat()}, ${newPosition.lng()}`);
        infoWindow.open(map, marker);
    });

    marker.addListener('click', function() {
        infoWindow.setContent("Ini adalah Marker");
        infoWindow.open(map, marker);
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        const lat = parseFloat(document.getElementById('latitude').value);
        const lng = parseFloat(document.getElementById('longitude').value);
        const newCoords = { lat: lat, lng: lng };

        marker.setPosition(newCoords);
        map.setCenter(newCoords);
        infoWindow.setContent(`Koordinat: ${lat}, ${lng}`);
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
