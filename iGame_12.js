$( document ).ready(function() {

  //add first step
  $('#signupForm').append('<div class = "step" id="stepone"></div>');
  $('#signupForm').append('<div class = "step" id="steptwo"></div>');
  $('#steptwo').append('<div class = "col-md-6 col-sm-12 col-xs-12" ></div>');
  $('#signupForm').append('<div class = "step" id="stepthree"></div>');
  $('#igame-side-special').appendTo('#signupForm');
  $('#steptwo').hide();
  $('#stepthree').hide();
  $('.signup-col-left ').appendTo('#stepone ');
  $('.signup-col-right').appendTo('#stepthree ');
  $('<a class = "btn btn-warning " id="oneStepBtn">Next Step</a>').appendTo('#stepone .col-md-6 ');

  //add fields on the first step
  $('.signup-col-right > .form-group:first').insertAfter('.signup-col-left > .form-group:first');
  var countleft =  $('#stepone .signup-col-left > .form-group').length;
  while (countleft > 5) {
    $('#stepone .signup-col-left > .form-group:last ').appendTo('#steptwo .col-md-6 ');
    countleft--;
  }
   $('<a class = "btn btn-warning " id="secondStepBtn">Next Step</a>').appendTo('#steptwo .col-md-6 ');
   $('#stepone .col-md-6 ').removeClass('signup-col-left ');
   $('#stepthree .col-md-6').removeClass('signup-col-right ');

//go to the second step
 $('#oneStepBtn').click(function(){
       $('#stepone').hide();
       $('#steptwo').show();
       //add btn Next Step on the first step
 });

 //go to the 3 step
 $('#secondStepBtn').click(function(){
       $('#steptwo').hide();
       $('#stepthree').show();
  });
  $('#signupForm').css({
    padding: '5%',
    });

  $('#igame-side-special .special--bg-container .special--bg').css({
    width:'200px',
    height:'320px',
    });

});

//box-shadow: 0px 0px 0px 0 rgba(0,0,0,.1);
//вторая колонка '.signup-col-right' первая колонка signup-col-left
/*
$('#igame-side-special').css({
   position:'absolute',
   left:50%,
   top:50%,
  });
		*/
