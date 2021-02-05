
//This function calls the news api
function loadNews(){
    console.log("Hello World");

    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=800895a6447842d294e85af884a4da87';
   
    getJSON(url,
    function(err, data) {
    if (err !== null) {
        alert('Something went wrong: ' + err);
    } else {
        alert('Your query count: ' + data.query.count);
    }
    });

}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};