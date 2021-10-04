/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

$("#Home").click(function() {
    alert("...mmm!");
    $("#home").show();
    $("#about").hide();
    console.log("Hello");
    //$("#donate").hide();
});
// $("#About").click(function() {
//     $("#about").show();
//     $("#home").hide();
//     //$("#donate").hide();
// });

///////////////////////////////////////
// function myFunction() { 
//     var dots = document.getElementById("dots"); 
//     var moreText = document.getElementById("more"); 
//     var btnText = document.getElementById("myBtn");

//      
//     if (dots.style.display === "none") {    dots.style.display = "inline";   
//         btnText.innerHTML = "Read more";   
//         moreText.style.display = "none";  } else {    dots.style.display = "none";   
//         btnText.innerHTML = "Read less";   
//         moreText.style.display = "inline";  }
// }

// $("#Donate").click(function() {
//     $("#donate").show();
//     $("#about").hide();
//     $("#home").hide();
// });