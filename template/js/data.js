$("#Home").click(function() {
    $("#home").show();
    $("#projects").hide();
    $("#donate").hide();
});
$("#Projects").click(function() {
    $("#projects").show();
    $("#home").hide();
    $("#donate").hide();
});
$("#Donate").click(function() {
    $("#donate").show();
    $("#projects").hide();
    $("#home").hide();
});