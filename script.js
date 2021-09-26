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
    $("#home").show();
    $("#about").hide();
    //$("#donate").hide();
});
$("#About").click(function() {
    $("#about").show();
    $("#home").hide();
    //$("#donate").hide();
});
// $("#Donate").click(function() {
//     $("#donate").show();
//     $("#about").hide();
//     $("#home").hide();
// });