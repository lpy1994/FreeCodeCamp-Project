$(document).ready(function(){

  var streamer = ["ESL_SC2", "OgamingSC2", "cretetion","comster404 ", "brunofin", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  for(var i = 0; i < streamer.length; i++) {
    Online();
    Offline();
    Deleted();
  }
 
    function Offline(data) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + streamer[i] + "?client_id=2vva6sg3ibt023hjjqprs0lied2aw5i",
      function(data){
      var off = ""
   if(data.stream == null)
     $.getJSON(data._links.channel + "?client_id=2vva6sg3ibt023hjjqprs0lied2aw5i", function(offData){
     off += "<div class='off-user container-fluid'>";
    off += "<img src=" + offData.logo + ">";
    off += "<a target= '_blank' href=" + data.url + ">";
    off +="<h3>" + offData.display_name + "</h3></a>"
    off +="<span>" + offData.status + "</span></div>";
        
       $("#offlineUser").append(off);
     })
      })
    }
              
  function Deleted(data){
    $.getJSON("https://api.twitch.tv/kraken/streams/" + streamer[i] + "?client_id=2vva6sg3ibt023hjjqprs0lied2aw5i",
      function(data){
    if(data.stream){
    var deleted=""
    deleted += "<div class='deleted-user container-fluid'>";
    deleted += "<img src='https://www.isell.ps/assets/userimg/user-image-none.jpg'>";
    deleted += "<h3>" + streamer[i]  + " " + "has been closed" + "</h3></div>"
    $("#nonExist").append(deleted);  
    }
    })
    
  };
  
  function Online(data) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + streamer[i] + "?client_id=2vva6sg3ibt023hjjqprs0lied2aw5i",
      function(data){

      var on = "";
    on += "<div class='all-user container-fluid'>";
    on += "<img src=" + data.stream.channel.logo + ">";
    on += "<a target= '_blank' href=" + data.stream.channel.url + ">";
    on +="<h3>" + data.stream.channel.display_name + " " + "is streaming:" + " " + data.stream.game + "(views:" + data.stream.viewers + ") </h3></a>";
    on += "<p> Follower: [" + data.stream.channel.followers + "]</p>";
   
        $("#onlineUser").append(on);

    })
  };
  
 
 $("#online").click(function(){
    $("#onlineUser").show(800);
    $("#offlineUser").hide(800);
    $("#allUser").hide(800);
   $("#nonExist").hide(800);
 })
 
 $("#offline").click(function(){
    $("#offlineUser").show(800);
    $("#onlineUser").hide(800);
    $("#allUser").hide(800);
   $("#nonExist").hide(800);
 })
 
 $("#all").click(function(){
    $("#onlineUser").show(800);
    $("#offlineUser").show(800);
    $("#allUser").show(800);
    $("#nonExist").show(800);
 })

})