document.addEventListener("DOMContentLoaded", function(event) {
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');
  var s5 = document.getElementById('s5');
  var s6 = document.getElementById('s6');
  var pid = document.getElementById('pid');
  var easy = document.getElementById('easy');
  var hard = document.querySelector('#hard');

  easy.addEventListener('click',function(){
    function colorGen() {
      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);
      var newColor = "rgb(" + r +", " + g + ", " + b +")";
      return newColor;
    }
    easy.classList.add('selected');
    hard.classList.remove('selected');
    var color1E = colorGen()
    var color2E = colorGen()
    var color3E = colorGen()
    var colArrEasy = [color1E, color2E, color3E];
    function randomPickEasy(){
      var rand = Math.floor(Math.random()*3);
      return colArrEasy[rand];
    }
// assigning random number to prompt
    $( "#pid" ).replaceWith( "<span id='pid'><strong>" + randomPickEasy() + "</strong></span>" );
// getting rid of bottom 3 squares
    $("#s4").fadeTo("slow", 0.0);
    $("#s5").fadeTo("slow", 0.0);
    $("#s6").fadeTo("slow", 0.0);

// assign null to bottom 3 squares
    $("#s4").css('background-color', null);
    $("#s5").css('background-color', null);
    $("#s6").css('background-color', null);

// assigning colors
    $("#s1").css('background-color', color1E);
    $("#s2").css('background-color', color2E);
    $("#s3").css('background-color', color3E);

//bringing back top 3 squares
    $("#s1").fadeTo("slow", 1.0);
    $("#s2").fadeTo("slow", 1.0);
    $("#s3").fadeTo("slow", 1.0);

    s1.addEventListener("click",function(){
      if(color1E == pid.textContent){
        $("#s2").css('background-color', color1E);
        $("#s3").css('background-color', color1E);
      }
      else{
      $("#s1").fadeTo("slow", 0.0);
      }
    });
    s2.addEventListener("click",function(){
      if(color2E == pid.textContent){
        $("#s1").css('background-color', color2E);
        $("#s3").css('background-color', color2E);
      }
      else{
      $("#s2").fadeTo("slow", 0.0);
      }
    });
    s3.addEventListener("click",function(){
      if(color3E == pid.textContent){
        $("#s1").css('background-color', color3E);
        $("#s2").css('background-color', color3E);
      }
      else {
      $("#s3").fadeTo("slow", 0.0);
      }
    });


  });

  hard.addEventListener('click',function(){
    hard.classList.add('selected');
    easy.classList.remove('selected');
  });

// BEGIN HARD
// function to generate random colors
  function colorGen() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var newColor = "rgb(" + r +", " + g + ", " + b +")";
    return newColor;
  }
// generate random color and assign to CSS for each square
  $("#s1").css('background-color', colorGen());
  $("#s2").css('background-color', colorGen());
  $("#s3").css('background-color', colorGen());
  $("#s4").css('background-color', colorGen());
  $("#s5").css('background-color', colorGen());
  $("#s6").css('background-color', colorGen());
// assign newly generated color to variable
  var color1 = $('#s1').css("background-color");
  var color2 = $('#s2').css("background-color");
  var color3 = $('#s3').css("background-color");
  var color4 = $('#s4').css("background-color");
  var color5 = $('#s5').css("background-color");
  var color6 = $('#s6').css("background-color");
// create color variable array
  var colArr = [color1, color2, color3, color4, color5, color6]

//randomly grab one of the colors from the color array
  function randomPick(){
    var rand = Math.floor(Math.random()*6);
    return colArr[rand];
  }
// assign random color from array to
  $( "#pid" ).append( "<a>" + randomPick() + "</a>" );

  s1.addEventListener("click",function(){
    if($('#easy').hasClass('selected')){

      if($('#s1').css("background-color") == $("#pid").text()){
        alert('works');
        $("#s2").css('background-color', $('#s1').css("background-color"));
        $("#s3").css('background-color', $('#s1').css("background-color"));
      }
      else{
      $("#s1").fadeTo("slow", 0.0);
      }
    }
    else {
      if($('#s1').css("background-color") == pid.textContent){
        $("#s2").css('background-color', $('#s1').css("background-color"));
        $("#s3").css('background-color', $('#s1').css("background-color"));
        $("#s4").css('background-color', $('#s1').css("background-color"));
        $("#s5").css('background-color', $('#s1').css("background-color"));
        $("#s6").css('background-color', $('#s1').css("background-color"));
      }
      else{
      $("#s1").fadeTo("slow", 0.0);
      }
    }
  });
  s2.addEventListener("click",function(){
    if($('#easy').hasClass('selected')){
      if($('#s2').css("background-color") == pid.textContent){
        alert('works');
        $("#s1").css('background-color', $('#s2').css("background-color"));
        $("#s3").css('background-color', $('#s2').css("background-color"));
      }
      else{
      $("#s2").fadeTo("slow", 0.0);
      }
    }
    else {
      if($('#s2').css("background-color" == pid.textContent)){
        $("#s1").css('background-color', $('#s2').css("background-color"));
        $("#s3").css('background-color', $('#s2').css("background-color"));
        $("#s4").css('background-color', $('#s2').css("background-color"));
        $("#s5").css('background-color', $('#s2').css("background-color"));
        $("#s6").css('background-color', $('#s2').css("background-color"));
      }
      else{
        $("#s2").fadeTo("slow", 0.0);
      }
    }
  });

  s3.addEventListener("click",function(){
    if($('#easy').hasClass('selected')){
      if($('#s3').css("background-color") == pid.textContent){
        alert('works');
        $("#s1").css('background-color', $('#s3').css("background-color"));
        $("#s2").css('background-color', $('#s3').css("background-color"));
      }
      else{
      $("#s3").fadeTo("slow", 0.0);
      }
    }
    else {
      if($('#s3').css("background-color") == pid.textContent){
        $("#s1").css('background-color', $('#s3').css("background-color"));
        $("#s2").css('background-color', $('#s3').css("background-color"));
        $("#s4").css('background-color', $('#s3').css("background-color"));
        $("#s5").css('background-color', $('#s3').css("background-color"));
        $("#s6").css('background-color', $('#s3').css("background-color"));
      }
      else {
      $("#s3").fadeTo("slow", 0.0);
      }
    };
  });

  s4.addEventListener("click",function(){
    if(color4 == pid.textContent){
      $("#s1").css('background-color', color4);
      $("#s2").css('background-color', color4);
      $("#s3").css('background-color', color4);
      $("#s5").css('background-color', color4);
      $("#s6").css('background-color', color4);
    }
    else {
      $("#s4").fadeTo("slow", 0.0);
    }
  });
  s5.addEventListener("click",function(){
    if(color5 == pid.textContent){
      $("#s1").css('background-color', color5);
      $("#s2").css('background-color', color5);
      $("#s3").css('background-color', color5);
      $("#s4").css('background-color', color5);
      $("#s6").css('background-color', color5);
    }
    else{
      $("#s5").fadeTo("slow", 0.0);
    }
  });
  s6.addEventListener("click",function(){
    if(color6 == pid.textContent){
      $("#s1").css('background-color', color6);
      $("#s2").css('background-color', color6);
      $("#s3").css('background-color', color6);
      $("#s4").css('background-color', color6);
      $("#s5").css('background-color', color6);
    }
    else{
    $("#s6").fadeTo("slow", 0.0);
  }
  });

});
