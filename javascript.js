//Based on: https://codepen.io/sharafat_8271/pen/KVWMXP
$(document).ready(function() {
$('#next1').click(function(){
    $('#stepper1').addClass('step-done');
    $('#stepper1').removeClass('editable-step');
    $('#stepper2').addClass('active-step');
    $('#stepper2').addClass('editable-step');
    activeStep($('#step2'));
  });
  $('#next2').click(function(){
    $('#stepper2').addClass('step-done');
    $('#stepper2').removeClass('editable-step');
    $('#stepper3').addClass('active-step');
    $('#stepper3').addClass('editable-step');
    activeStep($('#step3'));
  });
  $('#finish').click(function(){
    $('#stepper3').addClass('step-done');
    $('#stepper3').removeClass('editable-step');
    //DO SOMETHING
  });
  $('#previous2').click(function(){
    $('#stepper1').removeClass('step-done');
    activeStep($('#step1'));
  });
  $('#previous3').click(function(){
    $('#stepper2').removeClass('step-done');
    activeStep($('#step2'));
  });
  
  function activeStep(stepDiv){
    $('.step').addClass('hide');
    stepDiv.removeClass('hide');
  }
  
  
  
  //  $('.datepicker').pickadate({
  //      min: new Date(),
  //     selectMonths: true, // Creates a dropdown to control month
  //      selectYears: 15, // Creates a dropdown of 15 years to control year
  //     firstDay: 1
  //   });

    $('.datepicker').datepicker();

  
//  var picker = $('#beginDate').pickadate('picker');
//    picker.set('select', new Date());
//    var picker = $('#endDate').pickadate('picker');
//    picker.set('select', new Date());
  
  
   $('select').formSelect();

  /*
  var form = $("#example-form");
  form.children("div").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft",
    
 
      labels: {
          cancel: "Cancel?",
          current: "current step:",
          pagination: "Pagination",
          finish: "Finish!!",
          next: "Next >",
          previous: "< Previous",
          loading: "Loading ..."
      },
    
    
      onStepChanging: function (event, currentIndex, newIndex)
      {
          
          return true;
      },
      onFinishing: function (event, currentIndex)
      {
          
          return true;
      },
      onFinished: function (event, currentIndex)
      {
          alert("Submitted!");
      }
  });
  */

});