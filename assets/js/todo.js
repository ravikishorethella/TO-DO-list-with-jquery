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


//// using the click event 
////when an li is clicked it should be striked off and color should change
//$("li").click(function(){
//    $(this).toggleClass("completed");
//});

// we need to do this with the on event becuase with on() we can delete the future lis as well
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});



//like the above we need to use the on() 
// now deleting the todos
$("ul").on("click","span",function(event){
    // instead of the fadeout we can also delete the todos directly
    // $(this).parent().remove();
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// creating the todos
// to create the todos we need to target the input type
$("input[type='text']").keypress(function(event){
    // nothing should happen until the user hits enter
    if(event.which === 13){
        // if the user hits 13 then grab the text and store it in some variable
        var todoList = $(this).val();
        //the user has entered some input and we need to clear the text field
        $(this).val("");
        // once we get the value we need to add that to the ul 
        // we have an append() to add
        $("ul").append("<li><span>X </span>"+ todoList + "</li>");
        
    }
});