//User Story 1: Generation

$( document ).ready(function() {
    if($("input[value='Login']").length){ console.log( "I'm logged out" );
    }
     else{
       console.log("I am logged in");
       //Chande text on the button
         $('a[title="Versamenti"]').text('Deposita');}
});

//User Story 6: – Header Clicks
var value;
$( document ).on( "click", '#header a[href*="money/deposit"]',function() {
var isCTA = jQuery(this).attr('data-deposittrigger') === 'quickDepositPositioning-bottom';
console.log(isCTA ? value = "CTA" : value = "Other");
$.cookie('headerClick ', value)
});
//Sasha example
/*
jQuery('#header').find('a[href*="money/deposit"]').on('click', function() {

  var isCTA = jQuery(this).attr('data-deposittrigger') === 'quickDepositPositioning-bottom';

  alert(isCTA ? 'CTA' : 'Other');

});
*/
