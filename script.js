<script>
function initMap() {
    var location = { lat: 37.7955948, lng: -122.4006853 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "200 Jackson Street(at Front) San Francisco, CA 94111"
    });
}
</script >
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
