$( document ).ready(function() {

  //add first step
  $('.center-block').append('<div class = "step" id="stepone">**stepone*</div>');
  $('#signupForm').appendTo('#stepone');
  $(' .signup-col-left ').appendTo('#stepone ');
  $('.signup-col-right').hide();

  //add fields on the first step
  $('.signup-col-right > .form-group:first').insertAfter('.signup-col-left > .form-group:first');
  var countleft =  $('.signup-col-left > .form-group').length;
  while (countleft > 4) {
    $(' .signup-col-left > .form-group:last ').hide();
    countleft--;
  }
  //add btn Next Step on the first step
  $('<a href="#" class = "btn btn-warning " id="oneStepBtn">Next Step</a>').appendTo('#stepone');

//go to the second step
 $('#oneStepBtn').click(function(){
       $('#stepone').hide();
        //add second step
       $('.center-block').append('<div class = "step" id="steptwo">**steptwo*</div>');
       $('#signupForm').appendTo('#steptwo');
       $('.signup-col-left ').appendTo('#steptwo');
       $('#steptwo .signup-col-right').hide();
       $('#steptwo').hide();
      //add class for button Next Step
       $('#oneStepBtn').addClass('.stepsecon');
 });

 //go to the 3 step
 $('.stepsecon').click(function(){
       $('#steptwo').hide();
       //add third step
       $('.center-block').append('<div class = "step" id="stepthree">**stepthree*</div>');
       $('#signupForm').appendTo('#stepthree');
       $('.signup-col-right ').appendTo('#stepthre');
       //delete first field on the second step
       $('#stepthre .signup-col-right > .form-group:first').hide();
       //add fields on the step 2
       var countleft =  $('.signup-col-left > .form-group').length;
       while (countleft > 4) {
          $(' .signup-col-left > .form-group:first ').hide();
         countleft--;
       }
});

});

//вторая колонка '.signup-col-right' первая колонка signup-col-left
