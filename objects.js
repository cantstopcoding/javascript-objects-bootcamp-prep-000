let playlist = {
  'Bob Marley': 'One Love'  
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}