$(document).ready(function(){
  var randomQ;
  var randomAuthors;
  var randomNum;
  
  function randomQuotes(){
  var quotes = ["Technology is anything that wasn’t around when you were born. ", "Any sufficiently advanced technology is equivalent to magic.", "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.", "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.", "It has become appallingly obvious that our technology has exceeded our humanity.", "One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.", ]
  
  var authors = ["-Alan Kay (Computer Scientist)", "-Arthur C. Clarke (Author)", "-Mark Kennedy (Author)", "-Thomas Edison (Inventor)", "-Albert Einstein (Scientist)", "-Elbert Hubbard (Author)"]
  
  randomNum = Math.floor(Math.random() * quotes.length);
    randomQ = quotes[randomNum];
    randomAuthors = authors[randomNum];
    
    $(".quotes").text('"' + randomQ + '"');
    $(".authors").text(randomAuthors);
  }
  
  $("#tweet").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + randomQ + " " + randomAuthors);
  });
  
  $(".q-button").on("click", function(){
    randomQuotes();
     });
});