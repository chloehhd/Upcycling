
// $(".Upcycling").click(function(){
//   if($(".Upcycling").hasClass("active")){
//       $(".Upcycling").removeClass("active")
//   }else{
//       $(".Upcycling").addClass("active")
//   }
// })

// $(".Upcycling").click(function(){
//   $("#Up").show("#Up")
// }, function(){
//   $("#Up").hide("#Up")
// })


// -----------------------
//^ i couldn't figure this out so i changed the idea 

$(".Upcycling").click(function(){
  $(".Upcycling").toggleClass("active")  
})

$(".Recycling").click(function(){
  $(".Recycling").toggleClass("active2")
})

// -----------------------

$("#uplogo2").click(function(){
  var currentOpacity = $(this).css("opacity");
  if (currentOpacity == 1) {
    $(this).css("opacity", 0.5);
  } else {
    $(this).css("opacity", 1);
  }
});

$("#relogo2").click(function(){
  var currentOpacity = $(this).css("opacity");
  if (currentOpacity == 1) {
    $(this).css("opacity", 0.5);
  } else {
    $(this).css("opacity", 1);
  }
});


