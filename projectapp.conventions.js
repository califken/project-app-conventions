var googleAPIkey = "AIzaSyBQUeDjbwpS8YCApba7OFuvqwdKRFCsvmo";
var mapaddress = "Phoenix, AZ";
var endpoint =
  "https://maps.googleapis.com/maps/api/geocode/json?address=" + mapaddress + "&key=" + googleAPIkey;

function queryMapsAPI() {
  this.endpoint = endpoint;
  $.ajax({
    url: this.endpoint,
    type: "GET", // The HTTP Method
    data: {}, // Additional parameters here
    dataType: "json",
    error: function(err) {
      console.log(err);
    }
    /**,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", mashapeauthkey);
    }**/
  }).done(function(data) {
   console.log(data);
    var latitude = data.results[0].geometry.location.lat;
    var longitude = data.results[0].geometry.location.lng;
    $("#result").html("Search for: " + mapaddress + "<hr>" + "Lat: " + latitude + ", Lng: " + longitude);
  });
}

queryMapsAPI();
