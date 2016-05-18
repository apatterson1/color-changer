var colors = ["blue", "red", "green", "purple"];
function changeColor(){
   var randomIndex = Math.random()*colors.length;
   randomIndex = Math.round(randomIndex);
   console.log(randomIndex)
     $("body").css("background-color", colors[randomIndex]);
}
function addColor(event){
   event.preventDefault()
    var newColor = $("#newColor input").val();
 colors[colors.length] = newColor;
    $("body").css("background-color", colors[colors.length - 1 ]);
}
$(function() {
$("#change").click(changeColor);
$("#newColor").submit(addColor);
});