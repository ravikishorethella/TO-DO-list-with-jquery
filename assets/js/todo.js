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


// now deleting the todos
$("span").click(function(event){
    // instead of the fadeout we can also delete the todos directly
    // $(this).parent().remove();
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});