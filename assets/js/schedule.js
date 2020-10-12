function addGame(date, time, subject, location){
    console.log("Adding game: Date: " + date, ": " + time);
    $("ul").append("<li>" + "Date: " + date + "</li>");
}

function emptyList(){
    console.log("Clearing List Items");
    $("ul").empty();
}

$(document).ready(function() {
    var myItems;
    console.log("test");
    $.getJSON('../../2020Schedule.json', function(data) {
        myItems = data.items;
        console.log(myItems);
    });
});

