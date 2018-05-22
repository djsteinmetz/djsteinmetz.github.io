// This function changes the size.
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
    document.getElementById("box").style.scale = "2"
    
 });

 // This function changes the color

 document.getElementById("button2").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "blue";

 });

 // This button changes the size

 document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.3";

 });

 // This button changes the length

 document.getElementById("button3B").addEventListener("click", function() {
     
    document.getElementById("box").style.width = "600px";
 });

 // This button resets the box to default
 
 document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

 });
