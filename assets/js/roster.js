//Button Click Functions
$("#btnAll").click(function() {
    $("#btnAll").css('background-color',' #4C8CEE');
    $("#btnPitchers").css('background-color','white');
    $("#btnCatchers").css('background-color','white');
    $("#btnInfielders").css('background-color','white');
    $("#btnOutfielders").css('background-color','white');
    filterAll();
});

$("#btnPitchers").click(function() {
    $("#btnAll").css('background-color','white');
    $("#btnPitchers").css('background-color',' #4C8CEE');
    $("#btnCatchers").css('background-color','white');
    $("#btnInfielders").css('background-color','white');
    $("#btnOutfielders").css('background-color','white');
    filterPitchers();
});

$("#btnCatchers").click(function() {
    $("#btnAll").css('background-color','white');
    $("#btnPitchers").css('background-color','white');
    $("#btnCatchers").css('background-color',' #4C8CEE');
    $("#btnInfielders").css('background-color','white');
    $("#btnOutfielders").css('background-color','white');
    filterCatchers();
});

$("#btnInfielders").click(function() {
    $("#btnAll").css('background-color','white');
    $("#btnPitchers").css('background-color','white');
    $("#btnCatchers").css('background-color','white');
    $("#btnInfielders").css('background-color',' #4C8CEE');
    $("#btnOutfielders").css('background-color','white');
    filterInfielders();
});

$("#btnOutfielders").click(function() {
    $("#btnAll").css('background-color','white');
    $("#btnPitchers").css('background-color','white');
    $("#btnCatchers").css('background-color','white');
    $("#btnInfielders").css('background-color','white');
    $("#btnOutfielders").css('background-color','#4C8CEE');
    filterOutfielders();
});


//Table Filter Functions
function filterAll(){
    $('#tablePitchers').show();
    $('#tableCatchers').show();
    $('#tableInfielders').show();
    $('#tableOutfielders').show();
}

function filterPitchers(){
    $('#tablePitchers').show();
    $('#tableCatchers').hide();
    $('#tableInfielders').hide();
    $('#tableOutfielders').hide();
}

function filterCatchers(){
    $('#tablePitchers').hide();
    $('#tableCatchers').show();
    $('#tableInfielders').hide();
    $('#tableOutfielders').hide();
}

function filterInfielders(){
    $('#tablePitchers').hide();
    $('#tableCatchers').hide();
    $('#tableInfielders').show();
    $('#tableOutfielders').hide();
}

function filterOutfielders(){
    $('#tablePitchers').hide();
    $('#tableCatchers').hide();
    $('#tableInfielders').hide();
    $('#tableOutfielders').show();
}

