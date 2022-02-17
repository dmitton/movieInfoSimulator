document.getElementById("submitButton").addEventListener("click", function(event){
  event.preventDefault();
  let title = document.getElementById('movie-name').value;
  let year = document.getElementById('year-released').value;
  let s = document.getElementById('selector');
  let plotType = s.options[s.selectedIndex].value;

  const url = "https://omdbapi.com/?t=" + title + "&y=" + year + "&plot=" + plotType + "&apikey=b328ec2d";
  console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += "<div class = 'moviePoster'>";
      results += "<img src ='" + json.Poster + "'><br>";
      results += "</div>"
      results += "<div class = 'movieInfo'>";
      results += "<h2>" + json.Title + "</h2>";
      results += "<br>";
      results += "<p class = 'plot-details'>Plot Details</p>";
      results += "<p>" + json.Plot + "</p>";
      results += "<p>Year Released: " + json.Year + "</p>";
      results += "<p>Rated: " + json.Rated + "</p>";
      results += "<p>Release Date: " + json.Released + "</p>";
      results += "<p>Runtime: " + json.Runtime + "</p>";
      results += "<p>Genre: " + json.Genre + "</p>";
      results += "<p>Director: " + json.Director + "</p>";
      results += "<p>Actors: " + json.Actors + "</p>";
      results += "<ul>Ratings";
      for(let i = 0; i < json.Ratings.length;i++){
        results += "<li>" + json.Ratings[i].Source + ": " + json.Ratings[i].Value + "</li>";
      }
      results += "</ul>"
      results += "</div>";
      document.getElementById("searchResults").innerHTML = results;
    });
});
