/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openCloseMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function showAll(){
    $('#HighlightCompilations').show();
    $('#2020SeasonList').show();
    $('#2002WorldChamps').show();
}

function show2020Season(){
    $('#HighlightCompilations').hide();
    $('#2020SeasonList').show();
    $('#2002WorldChamps').hide();
}

function show2002WorldChamps(){
    $('#HighlightCompilations').hide();
    $('#2020SeasonList').hide();
    $('#2002WorldChamps').show();
}

function showHightlightComp(){
    $('#HighlightCompilations').show();
    $('#2020SeasonList').hide();
    $('#2002WorldChamps').hide();
}
