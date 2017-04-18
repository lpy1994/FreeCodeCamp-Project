//shoutout to all the "wiki viewer" projects in CodePen

$(document).ready(function(){
  //press "Enter" to get the result
  $("#search-box").on('keydown',function(e){
    if(e.keyCode == 13){
      e.preventDefault;
      WikiSearch();
    }
  })
  //click the "search" button to get the result
  $("#search-bt").on("click", function(){
   WikiSearch();
  });
})
  //get the API working.
  function WikiSearch(){
    var html = ""
  var searchBox = $("#search-box").val();
    
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox + "&limit=10&namespace=0&format=json&callback=?",function(json){
    //loop for the wiki result 
    for(var i = 0; i <json[1].length; i++){
    //simple outlook of the result
     html += "<div class='wikiBox'>";
          html += " <span id='titles' class='pull-right'>" + " " + json[1][i] + "</span>" + ":" + "<br>";
          html += "<span>" + json[2][i] + "..." + "</span><br>";
          html += "<a href='" + json[3][i] + "' target='_blank'>" + json[3][i] + "</a><br>";
          html += "</div>";
     
          html += "</div><br>";
     //make sure that it displays in the <div>
      $("#result").html(html);
      $("#title").remove();
      $("#search-box").val('');
      
        }     
    });
   
           
  }
 
  