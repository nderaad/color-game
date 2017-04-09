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
    easy.classList.add('selected');
    hard.classList.remove('selected');
    var color1 = colorGen()
    var color2 = colorGen()
    var color3 = colorGen()
    function randomPickEasy(){
      var rand = Math.floor(Math.random()*6);
      return colArrEasy[rand];
    }
    var colArrEasy = [color1, color2, color3];
    $( "#pid" ).replaceWith( "<a><strong>" + randomPick() + "</strong></a>" );

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
    if(color1 == pid.textContent){
      $("#s2").css('background-color', color1);
      $("#s3").css('background-color', color1);
      $("#s4").css('background-color', color1);
      $("#s5").css('background-color', color1);
      $("#s6").css('background-color', color1);
    }
    else{
    $("#s1").fadeTo("slow", 0.0);
    }
  });
  s2.addEventListener("click",function(){
    if(color2 == pid.textContent){
      $("#s1").css('background-color', color2);
      $("#s3").css('background-color', color2);
      $("#s4").css('background-color', color2);
      $("#s5").css('background-color', color2);
      $("#s6").css('background-color', color2);
    }
    else{
    $("#s2").fadeTo("slow", 0.0);
    }
  });
  s3.addEventListener("click",function(){
    if(color3 == pid.textContent){
      $("#s1").css('background-color', color3);
      $("#s2").css('background-color', color3);
      $("#s4").css('background-color', color3);
      $("#s5").css('background-color', color3);
      $("#s6").css('background-color', color3);
    }
    else {
    $("#s3").fadeTo("slow", 0.0);
    }
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
