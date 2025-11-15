// json
const songs = [
  {
    title: "Always Remember Us This Way",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/misc-soundtrack/a-star-is-born-always-remember-us-this-way-chords-2484211" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/ladygaga/alwaysrememberusthisway.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=5vheNbQlsyU" }
    ],
    audio: [
      { label: "MP3", url: "mp3/LadyGaga-AlwaysRememberUsThisWay31.mp3" }
    ]
  },
  {
    title: "California Dreamin'",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/the-mamas-the-papas/california-dreamin-chords-862466" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/mamasandthepapas/californiadreamin.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=N-aK6JnyFmk" }
    ],
    audio: [
      { label: "MP3", url: "mp3/MamasAndPapas-CaliforniaDreamin.mp3" }
    ]
  },
  {
    title: "Comfortably Numb",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/pink-floyd/comfortably-numb-chords-44547" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/pinkfloyd/comfortablynumb.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=7f3EGjRxxNI&t=31" }
    ],
    audio: [
      { label: "MP3", url: "mp3/PinkFloyd-ComfortablyNumb.mp3" },
      { label: "Us", url: "mp3/us/ComfortablyNumb.mp3" }
    ]
  },
  {
    title: "Creep",
    titleLink: "lyrics_chords/Radiohead - Creep.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/radiohead/creep-chords-4169" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/radiohead/creep.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=XFkzRNyygfk" }
    ],
    audio: [
      { label: "MP3", url: "mp3/Radiohead-Creep.mp3" },
      { label: "Us", url: "mp3/us/Creep.mp3" }
    ]
  },
  {
    title: "Don't Let Me Down",
    titleLink: "lyrics_chords/Beatles-DontLetMeDown.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/the-beatles/dont-let-me-down-chords-1044470" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/beatles/dontletmedown.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=NCtzkaL2t_Y" }
    ],
    audio: [
      { label: "MP3", url: "mp3/Beatles-DontLetMeDown.mp3" },
      { label: "Us", url: "mp3/us/DontLetMeDown.mp3" }
    ]
  },
  {
    title: "Everybody Hurts",
    titleLink: "lyrics_chords/REM-EverybodyHurts.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/r-e-m-/everybody-hurts-chords-37519" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/rem/everybodyhurts.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=5rOiW_xY-kc" }
    ],
    audio: [
      { label: "MP3", url: "mp3/REM-EverybodyHurts.mp3" },
      { label: "Us", url: "mp3/us/EverybodyHurts.mp3" }
    ]
  },
  {
    title: "Free Bird",
    titleLink: "lyrics_chords/Lynyrd Skynyrd - Freebird.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/lynyrd-skynyrd/free-bird-chords-127116" },
      { label: "Tab", url: "https://tabs.ultimate-guitar.com/tab/lynyrd-skynyrd/free-bird-tabs-350756" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/lynyrdskynyrd/freebird.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=CqnU_sJ8V-E" }
    ],
    audio: [
      { label: "MP3", url: "mp3/LynardSkynard-FreeBird.mp3" }
    ]
  },
  {
    title: "Have You Ever Seen The Rain",
    titleLink: "lyrics_chords/CCR - Have You Ever Seen The Rain.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/creedence-clearwater-revival/have-you-ever-seen-the-rain-chords-56479" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/creedenceclearwaterrevival/haveyoueverseentherain.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=u1V8YRJnr4Q" }
    ],
    audio: [
      { label: "MP3", url: "mp3/CCR-HaveYouEverSeenTheRain.mp3" }
    ]
  },
  {
    title: "I'm The Only One",
    titleLink: "lyrics_chords/Melissa Etheridge - I'm The Only One.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/melissa-etheridge/im-the-only-one-chords-1511970" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/melissaetheridge/imtheonlyone.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=oCphbDRkZSo" }
    ],
    audio: [
      { label: "MP3", url: "mp3/MelissaEtheridge-ImTheOnlyOne.mp3" }
    ]
  },
  {
    title: "Killing Me Softly",
    titleLink: "lyrics_chords/Fugees - Killing me Softly.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/fugees/killing-me-softly-chords-854650" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/robertaflack/killingmesoftlywithhissong.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=oKOtzIo-uYw" }
    ],
    audio: [
      { label: " MP3 (Fugees Version)", url: "mp3/Fugees-KillingMeSoftly.mp3" },
      { label: " MP3 (Roberta Flack version)", url: "mp3/RobertaFlack-KillingMeSoftly.mp3" }
    ]
  },
  {
    title: "Maggie May",
    titleLink: "lyrics_chords/Rod Stewart - Maggie May.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/rod-stewart/maggie-may-chords-354424" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/rodstewart/maggiemay.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=jubOWUlkxuk" }
    ],
    audio: [
      { label: "MP3", url: "mp3/RodStewart-MaggieMay.mp3" }
    ]
  },
  {
    title: "My Sweet Lord",
    titleLink: "lyrics_chords/George Harrison - My Sweet Lord.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/george-harrison/my-sweet-lord-chords-106200" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/georgeharrison/mysweetlord.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=04v-SdKeEpE" }
    ],
    audio: [
      { label: "MP3", url: "mp3/GeorgeHarrison-MySweetLord.mp3" }
    ]
  },
  {
    title: "Something",
    titleLink: "lyrics_chords/Beatles - SomethingLyricChords.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/the-beatles/something-chords-335727" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/beatles/something-abbey.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=UelDrZ1aFeY" }
    ],
    audio: [
      { label: "MP3", url: "mp3/Beatles-Something.mp3" }
    ]
  },
  {
    title: "Stand By Me",
    titleLink: "lyrics_chords/BenEKing-StandByMe.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/ben-e-king/stand-by-me-chords-73005" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/beneking/standbyme.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=hwZNL7QVJjE" }
    ],
    audio: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=hwZNL7QVJjE" },
      { label: "Us", url: "mp3/us/StandByMe.mp3" }
    ]
  },
  {
    title: "Tennessee Whiskey",
    titleLink: "lyrics_chords/Chris Stapleton - Tennessee Whiskey.txt",
    chords: [
      { label: "Standard", url: "https://tabs.ultimate-guitar.com/tab/chris-stapleton/tennessee-whiskey-chords-1741042" },
      { label: "Capo: 2nd Fret", url: "https://tabs.ultimate-guitar.com/tab/chris-stapleton/tennessee-whiskey-chords-1802477" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/chrisstapleton/tennesseewhiskey.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=4zAThXFOy2c" }
    ],
    audio: [
      { label: "MP3", url: "mp3/ChrisStapleton-TennesseeWhiskey.mp3" }
    ]
  },
  {
    title: "Tequila Sunrise",
    titleLink: "lyrics_chords/Eagles - Tequila Sunrise.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/eagles/tequila-sunrise-chords-199062" },
      { label: "Tab", url: "https://tabs.ultimate-guitar.com/tab/eagles/tequila-sunrise-tabs-93317" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/eagles/tequilasunrise19388.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=1K0N7UaZpz8" }
    ],
    audio: [
      { label: "MP3 (Studio Version)", url: "mp3/Eagles-TequilaSunrise.mp3" },
      { label: "MP3 (Hell Freezes Over version)", url: "mp3/Eagles-TequilaSunrise[Live].mp3" }
    ]
  },
  {
    title: "The Man Who Sold The World (Nirvana Version)",
    titleLink: "lyrics_chords/Nirvana - The Man Who Sold the World.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/nirvana/the-man-who-sold-the-world-chords-651988" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/nirvana/themanwhosoldtheworld.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=fregObNcHC8" }
    ],
    audio: [
      { label: "MP3", url: "mp3/Nirvana-TheManWhoSoldTheWorld.mp3" }
    ]
  },
  {
    title: "What's Up?",
    chords: [
      { label: "Standard", url: "https://tabs.ultimate-guitar.com/tab/4-non-blondes/whats-up-chords-268676" },
      { label: "Capo: 2nd Fret", url: "https://tabs.ultimate-guitar.com/tab/4-non-blondes/whats-up-chords-349210" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/4nonblondes/whatsup.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=6NXnxTNIWkc" }
    ],
    audio: [
      { label: "MP3", url: "mp3/4NonBlondes-WhatsUp.mp3" }
    ]
  },
  {
    title: "Wild Horses",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/the-rolling-stones/wild-horses-chords-860978" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/rollingstones/wildhorses.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=nY_GgPi5eCM" }
    ],
    audio: [
      { label: "MP3", url: "mp3/RollingStones-WildHorses.mp3" },
      { label: "Us", url: "mp3/us/WildHorses.mp3"}
    ]
  },
  {
    title: "Your Heart Is As Black As Night",
    titleLink: "lyrics_chords/Melody Gardot - Your Heart is as Black as Night Capo3.txt",
    chords: [
      { label: "Chords", url: "https://tabs.ultimate-guitar.com/tab/melody-gardot/your-heart-is-as-black-as-night-chords-1133996" }
    ],
    lyrics: [
      { label: "azlyrics", url: "https://www.azlyrics.com/lyrics/melodygardot/yourheartisasblackasnight.html" }
    ],
    video: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=7d_rHsDm2tg" }
    ],
    audio: [
      { label: "MP3 (Studio Version)", url: "mp3/MelodyGardot-YourHeartIsAsBlackAsNight.mp3" },
      { label: "MP3 (Live Version)", url: "mp3/MelodyGardot-YourHeartIsAsBlackAsNightLive.mp3" }
    ]
  }
];


// Url Constants
var urlChord = "https://www.ultimate-guitar.com";
var urlChordSearch = "https://www.ultimate-guitar.com/search.php?search_type=title&value=";
var urlLyric = "https://www.azlyrics.com";
// var urlLyricSearch = "https://search.azlyrics.com/search.php?q=";
var urlLyricSearch = "https://www.google.com/search?q=site:azlyrics.com+";
var urlYoutube = "https://www.youtube.com";
var urlYoutubeSearch = "https://www.youtube.com/results?search_query=";

// Process Chord Search
function processChordSearch() {
  var query = getTxtSearch();
  var url = query === "" ? urlChord : urlChordSearch + encodeURIComponent(query);

  window.open(url, "_blank");
}

// Process Lyric Search
function processLyricSearch() {
  var query = getTxtSearch();
  var url = query === "" ? urlLyric : urlLyricSearch + encodeURIComponent(query);

  window.open(url, "_blank");
}

// Process Youtube Search
function processYoutubeSearch() {
  var query = getTxtSearch();
  var url = query === "" ? urlYoutube : urlYoutubeSearch + encodeURIComponent(query);

  window.open(url, "_blank");
}

// Process Clear
function processClear() {
  document.getElementById("txtSearch").value = "";
}

// Get text input
function getTxtSearch() {
  return document.getElementById("txtSearch").value;
}

function createLink(url, text) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

function populateSongTable() {
  const tbody = document.getElementById("songTableBody");
  tbody.innerHTML = ""; // Clear any existing rows

  songs.forEach(song => {
    // const row = document.createElement("tr");
    const row = document.createElement("tr");
    row.classList.add("song-item");
    row.setAttribute("data-title", song.title);


    // Title cell: link to .txt file if available
    const titleCell = `<td>${song.titleLink
        ? createLink(song.titleLink, song.title)
        : song.title
      }</td>`;

    // Chords cell
    const chordsCell = `<td>${song.chords?.map(link => createLink(link.url, link.label)).join("<br>") || ""
      }</td>`;

    // Lyrics cell
    const lyricsCell = `<td>${song.lyrics?.map(link => createLink(link.url, link.label)).join("<br>") || ""
      }</td>`;

    // Video cell
    const videoCell = `<td>${song.video?.map(link => createLink(link.url, link.label)).join("<br>") || ""
      }</td>`;

    // Audio cell
    const audioCell = `<td>${song.audio?.map(link => createLink(link.url, link.label)).join("<br>") || ""
      }</td>`;

    row.innerHTML = titleCell + chordsCell + lyricsCell + videoCell + audioCell;
    tbody.appendChild(row);
  });
}

async function loadPlaylistFile() {
  try {
    const response = await fetch("playlist.txt");
    const text = await response.text();

    return text
      .split("\n")
      .map(x => x.trim())
      .filter(x => x.length > 0);

  } catch (e) {
    console.error("Could not load playlist.txt", e);
    return [];
  }
}

function filterSongs(playlistArray) {
  document.querySelectorAll(".song-item").forEach(row => {
    const title = row.getAttribute("data-title");
    if (playlistArray.includes(title)) {
      row.classList.remove("d-none");
    } else {
      row.classList.add("d-none");
    }
  });
}

function showAllSongs() {
  document.querySelectorAll(".song-item").forEach(row => {
    row.classList.remove("d-none");
  });
}

function reorderSongs(playlistArray) {
  const tbody = document.getElementById("songTableBody");

  // Get all song rows as an array
  const rows = Array.from(document.querySelectorAll(".song-item"));

  // Sort rows based on the index of their title in playlist.txt
  rows.sort((a, b) => {
    const titleA = a.getAttribute("data-title");
    const titleB = b.getAttribute("data-title");

    return playlistArray.indexOf(titleA) - playlistArray.indexOf(titleB);
  });

  // Append rows in new order
  rows.forEach(row => tbody.appendChild(row));
}


document.getElementById("currentPlaylistOnly").addEventListener("change", async function () {
  if (this.checked) {
    const playlist = await loadPlaylistFile();
    filterSongs(playlist);
    reorderSongs(playlist);
  } else {
    showAllSongs();
    reorderSongs(songs.map(s => s.title)); // restore original order
  }
});

// Call this when the page loads
window.onload = async function () {
  // Populate songs first
  populateSongTable();

  // Then check the checkbox state
  const checkbox = document.getElementById("currentPlaylistOnly");
  if (checkbox.checked) {
    const playlist = await loadPlaylistFile();
    filterSongs(playlist);
    reorderSongs(playlist);
  }
};
