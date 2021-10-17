var likeUp = 1;
$("#like-up").click(function() {
    $(".glyphicon-thumbs-up").html(" " + "<strong>" + likeUp + "</strong>");
    likeUp++;
});

var likeDown = 1;
$("#like-down").click(function() {
    $(".glyphicon-thumbs-down").html(" " + "<strong>" + likeDown + "</strong>" + " ");
    likeDown++;
});