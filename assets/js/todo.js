////method 1
//
//$("li").click(function(){
//   // if the color is gray change that to black else turn to gray
//    if($(this).css("color")==="rgb(128, 128, 128)"){
//        $(this).css({
//            color: "black",
//            textDecoration: "none"
//        });
//    }else{
//        $(this).css({
//            color: "gray",
//            textDecoration: "line-through"
//        });
//    }
//});

// the above code can also be done in different way
// create a css style named completed and define the color and text-decoration properties and 
//pass that to the toggleclass in jquery:

//when an li is clicked it should be striked off and color should change
$("li").click(function(){
    $(this).toggleClass("completed");
});