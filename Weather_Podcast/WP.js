$(document).ready(function getposition(){ 
  
  var location = "http://ip-api.com/json";
  $.getJSON(location, function(data) {
    var lat = data.lat;
    var lon = data.lon;
    
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=e5e156ca17e33425299ac2825412ca51", function(data){
  $('#location').html(data.name);
  var temp = Math.round((data.main.temp));
  var tempC = Math.round((temp - 273.15));
  var tempF = Math.round(tempC * 1.8 + 32);
  var weather = data.weather[0].main;
  $("#temp").html(tempC);
  $("#weahter").html(weather);
    var iconSrc = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
       
          $("#weather").html('<img src=' + iconSrc + '>');
  
  //
  $("#fahrenheit-btn").on("click", function() {
        $("#fahrenheit-btn").is(":checked");
        $("#temp").html(tempF);
      });
  
      $("#celsius-btn").on("click", function() {
        $("#celsius-btn").is(":checked");
        $("#temp").html(tempC);       
          });
      })
  })
});

        