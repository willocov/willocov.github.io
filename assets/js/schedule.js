function addGame(date, time, subject, location){
    console.log("Adding game: Date: " + date);
    if(subject.startsWith("Angels")){
        $("#scheduleList").append("<li class=\"list-group-item\">" + "Date: " + date + "- Time: " + time + " - " + subject + " - Location: " + location + "</li>");
    }
    else{
        $("#scheduleList").append("<li class=\"list-group-item\" style=\"background-color:#ff8080;\">" + "Date: " + date + "- Time: " + time + " - " + subject + " - Location: " + location + "</li>");

    }
}


function emptyList(){
    console.log("Clearing List Items");
    $("#scheduleList").empty();
}

$(document).ready(function() {
   for(i = 0; i < dates.length; ++i){
        console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
        addGame(dates[i], times[i], subjects[i], locations[i]);
   }
});

var dates = ["2/23/2020", "2/24/2020", "2/25/2020", "2/26/2020", "2/27/2020", "2/28/2020", "2/29/2020", "3/1/2020", "3/1/2020", "3/2/2020", "3/3/2020", "3/4/2020", "3/6/2020", "3/6/2020", "3/7/2020", "3/8/2020", "3/8/2020", "3/9/2020", "3/10/2020", "7/20/2020", "7/21/2020", "7/22/2020", "7/24/2020", "7/25/2020", "7/26/2020", "7/27/2020", "7/28/2020", "7/29/2020", "7/30/2020", "7/31/2020", "8/1/2020", "8/2/2020", "8/4/2020", "8/5/2020", "8/6/2020", "8/7/2020", "8/8/2020", "8/9/2020", "8/10/2020", "8/11/2020", "8/12/2020", "8/14/2020", "8/15/2020", "8/16/2020", "8/17/2020", "8/18/2020", "8/19/2020", "8/20/2020", "8/21/2020", "8/22/2020", "8/23/2020", "8/24/2020", "8/25/2020", "8/25/2020", "8/28/2020", "8/29/2020", "8/30/2020", "8/31/2020", "9/2/2020", "9/3/2020", "9/4/2020", "9/5/2020", "9/5/2020", "9/6/2020", "9/8/2020", "9/9/2020", "9/10/2020", "9/11/2020", "9/12/2020", "9/13/2020", "9/15/2020", "9/16/2020", "9/17/2020", "9/18/2020", "9/19/2020", "9/20/2020", "9/21/2020", "9/22/2020", "9/23/2020", "9/25/2020", "9/26/2020", "9/27/2020"];
var times = ["12:10 PM", "12:05 PM", "12:10 PM", "12:05 PM", "12:10 PM", "12:10 PM", "12:05 PM", "12:10 PM", "12:10 PM", "12:05 PM", "12:05 PM", "12:10 PM", "12:05 PM", "12:10 PM", "12:10 PM", "1:05 PM", "1:05 PM", "1:10 PM", "1:10 PM", "6:10 PM", "6:40 PM", "6:40 PM", "7:10 PM", "1:10 PM", "1:10 PM", "12:40 PM", "6:40 PM", "7:10 PM", "6:40 PM", "6:10 PM", "4:07 PM", "1:10 PM", "7:10 PM", "6:40 PM", "1:10 PM", "6:05 PM", "4:05 PM", "11:35 AM", "6:40 PM", "6:40 PM", "1:10 PM", "6:40 PM", "6:40 PM", "1:10 PM", "6:40 PM", "1:10 PM", "6:45 PM", "6:45 PM", "6:40 PM", "1:10 PM", "1:10 PM", "6:10 PM", "1:05 PM", "", "6:40 PM", "6:40 PM", "1:10 PM", "1:10 PM", "6:40 PM", "4:10 PM", "6:10 PM", "4:07 PM", "", "1:10 PM", "5:05 PM", "5:05 PM", "1:05 PM", "5:40 PM", "5:10 PM", "12:10 PM", "6:40 PM", "6:40 PM", "1:10 PM", "6:10 PM", "6:10 PM", "1:10 PM", "1:10 PM", "6:10 PM", "1:10 PM", "6:40 PM", "6:10 PM", "12:10 PM"];
var subjects = ["Rockies at Angels", "Angels at Brewers", "Reds at Angels", "Angels at Dodgers", "Padres at Angels", "Rangers at Angels", "Angels at Giants", "Angels at Rockies", "White Sox at Angels", "Angels at Cubs", "Angels at Indians", "Mariners at Angels", "Angels at Royals", "Royals at Angels", "D-backs at Angels", "Angels at Reds", "Angels at Brewers", "Indians at Angels", "Angels at Mariners", "Angels at Padres", "Angels at Dodgers", "Padres at Angels", "Angels at Athletics", "Angels at Athletics", "Angels at Athletics", "Angels at Athletics", "Mariners at Angels", "Mariners at Angels", "Mariners at Angels", "Astros at Angels", "Astros at Angels", "Astros at Angels", "Angels at Mariners", "Angels at Mariners", "Angels at Mariners", "Angels at Rangers", "Angels at Rangers", "Angels at Rangers", "Athletics at Angels", "Athletics at Angels", "Athletics at Angels", "Dodgers at Angels", "Dodgers at Angels", "Dodgers at Angels", "Giants at Angels", "Giants at Angels", "Angels at Giants", "Angels at Giants", "Angels at Athletics", "Angels at Athletics", "Angels at Athletics", "Angels at Astros", "Angels at Astros", "Angels at Astros - Time TBD", "Mariners at Angels", "Mariners at Angels", "Mariners at Angels", "Mariners at Angels", "Padres at Angels", "Padres at Angels", "Astros at Angels", "Astros at Angels", "Angels at Astros - Time TBD", "Astros at Angels", "Angels at Rangers", "Angels at Rangers", "Angels at Rangers", "Angels at Rockies", "Angels at Rockies", "Angels at Rockies", "D-backs at Angels", "D-backs at Angels", "D-backs at Angels", "Rangers at Angels", "Rangers at Angels", "Rangers at Angels", "Rangers at Angels", "Angels at Padres", "Angels at Padres", "Angels at Dodgers", "Angels at Dodgers", "Angels at Dodgers"];
var locations = ["Tempe Diablo Stadium - Tempe", "American Family Fields of Phoenix - Phoenix", "Tempe Diablo Stadium - Tempe", "Camelback Ranch - Glendale", "Tempe Diablo Stadium - Tempe", "Tempe Diablo Stadium - Tempe", "Scottsdale Stadium - Scottsdale", "Salt River Fields at Talking Stick - Scottsdale", "Tempe Diablo Stadium - Tempe", "Sloan Park - Mesa", "Goodyear Ballpark - Goodyear", "Tempe Diablo Stadium - Tempe", "Surprise Stadium - Surprise", "Tempe Diablo Stadium - Tempe", "Tempe Diablo Stadium - Tempe", "Goodyear Ballpark - Goodyear", "American Family Fields of Phoenix - Phoenix", "Tempe Diablo Stadium - Tempe", "Peoria Stadium - Peoria", "Petco Park - San Diego", "Dodger Stadium - Los Angeles", "Angel Stadium - Anaheim", "Oakland Coliseum - Oakland", "Oakland Coliseum - Oakland", "Oakland Coliseum - Oakland", "Oakland Coliseum - Oakland", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "T-Mobile Park - Seattle", "T-Mobile Park - Seattle", "T-Mobile Park - Seattle", "Globe Life Field - Arlington", "Globe Life Field - Arlington", "Globe Life Field - Arlington", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Oracle Park - San Francisco", "Oracle Park - San Francisco", "Oakland Coliseum - Oakland", "Oakland Coliseum - Oakland", "Oakland Coliseum - Oakland", "Minute Maid Park - Houston", "Minute Maid Park - Houston", "Minute Maid Park - Houston", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Globe Life Field - Arlington", "Globe Life Field - Arlington", "Globe Life Field - Arlington", "Coors Field - Denver", "Coors Field - Denver", "Coors Field - Denver", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Angel Stadium - Anaheim", "Petco Park - San Diego", "Petco Park - San Diego", "Dodger Stadium - Los Angeles", "Dodger Stadium - Los Angeles", "Dodger Stadium - Los Angeles"];

$("#monthFilter").change(function(){

    //alert('Selected value: ' + $(this).val());
    if($(this).val() === "1"){
        //Show all
        ShowAll();
    } 
    else if($(this).val() === "2"){
        //February
        ShowFeb();
    }
    else if($(this).val() === "3"){
        //March
        ShowMar();
    }
    else if($(this).val() === "4"){
        //July
        ShowJuly();
    }
    else if($(this).val() === "5"){
        //August
        ShowAug();
    }
    else if($(this).val() === "6"){
        //September
        ShowSep();
    }
});

function ShowAll(){
    //Clear List
    emptyList();

    for(i = 0; i < dates.length; ++i){
        console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
        addGame(dates[i], times[i], subjects[i], locations[i]);
   }

}

function ShowFeb(){
    emptyList();
    for(i = 0; i < dates.length; ++i){
        if(dates[i].charAt(0) === "2"){
            console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
            addGame(dates[i], times[i], subjects[i], locations[i]);
        }
   }
}

function ShowMar(){
    emptyList();
    for(i = 0; i < dates.length; ++i){
        if(dates[i].charAt(0) === "3"){
            console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
            addGame(dates[i], times[i], subjects[i], locations[i]);
        }
   }
}

function ShowJuly(){
    emptyList();
    for(i = 0; i < dates.length; ++i){
        if(dates[i].charAt(0) === "7"){
            console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
            addGame(dates[i], times[i], subjects[i], locations[i]);
        }
   }
}

function ShowAug(){
    emptyList();
    for(i = 0; i < dates.length; ++i){
        if(dates[i].charAt(0) === "8"){
            console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
            addGame(dates[i], times[i], subjects[i], locations[i]);
        }
   }
}

function ShowSep(){
    emptyList();
    for(i = 0; i < dates.length; ++i){
        if(dates[i].charAt(0) === "9"){
            console.log("Date: " + dates[i] + ": Time: " + times[i] + " : Subject: " + subjects[i] + " : Location: " + locations[i]);
            addGame(dates[i], times[i], subjects[i], locations[i]);
        }
   }
}
