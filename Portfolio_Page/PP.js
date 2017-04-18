var contact = function() {
  $('form').submit(function(){
    var name = $('#name').val();
    
    if (name==="") {
      $('.name-error').text("Please Enter Your Name.");
    }
    return false;
  });
  
  $('form').submit(function(){
    var email = $("#email").val();
    
    if(email==="") {
      $('.email-error').text("Please Enter Your Email.");
    }
    return false;
  });
  
  $('form').submit(function(){
    var phoneNumber = $("#phone-number").val();
    
    if(phoneNumber==="") {
      $('.phone-number-error').text("Please Enter Your Phone Number.");
    }
    return false;
  });
  
  $('form').submit(function(){
    var message = $("#message").val();
    
    if(message==="") {
      $('.message-error').text("Tell me something.");
    }
    return false;
  });
  
};

$(document).ready(contact);