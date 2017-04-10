(function () {
    var locationElement = document.getElementById("location-element");

    function getGeoLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => { resolve(position) },
                (error) => { reject(error) }
            );
        });
    }

    function parseCoordinates(geolocationPosition) {
        if (geolocationPosition.coords) {
            return {
                latitude: geolocationPosition.coords.latitude,
                longitude: geolocationPosition.coords.longitude
            };
        } else {
            throw {
                message: "No coords element found", name: "UserException"
            };
        }
    }

    function createGeoLocationImage(coordsObj) {
        var imgElement = document.createElement('img'),
            imgSource = "http://maps.googleapis.com/maps/api/staticmap?center=" + coordsObj.latitude + "," + coordsObj.longitude + "&zoom=13&size=500x500&sensor=false";

        imgElement.setAttribute('src', imgSource);
        locationElement.appendChild(imgElement);
    }

    getGeoLocation()
        .then(parseCoordinates)
        .then(createGeoLocationImage); 
}());