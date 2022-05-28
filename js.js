// Url Constants
var urlChord = "https://www.ultimate-guitar.com";
var urlChordSearch = "https://www.ultimate-guitar.com/search.php?search_type=title&value=";
var urlLyric = "https://www.azlyrics.com";
var urlLyricSearch = "https://search.azlyrics.com/search.php?q=";
var urlYoutube = "https://www.youtube.com";
var urlYoutubeSearch = "https://www.youtube.com/results?search_query=";

// Process Chord Search
function processChordSearch() {
  window.location = getTxtSearch() === "" ? urlChord : urlChordSearch + getTxtSearch();
}

// Process Lyric Search
function processLyricSearch() {
  window.location = getTxtSearch() === "" ? urlLyric : urlLyricSearch + getTxtSearch();
}

// Process Youtube Search
function processYoutubeSearch() {
  window.location = getTxtSearch() === "" ? urlYoutube : urlYoutubeSearch + getTxtSearch();
}

// Process Clear
function processClear() {
  document.getElementById("txtSearch").value = "";
}

// Get text input
function getTxtSearch() {
  return document.getElementById("txtSearch").value;
}