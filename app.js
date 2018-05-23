
// creating a new xmlHttpRequest
const songRequest = new XMLHttpRequest();
songRequest.open('GET', `https://itunes.apple.com/search?term=taylor+swift&limit=200`);
songRequest.onload = getSongs;
songRequest.onerror = errorHandler;
songRequest.send();

//request error handler function
function errorHandler() {
    console.log('Error');
}



//request result handler funnction
function getSongs() {
    const data = JSON.parse(this.responseText);
    const response = data.results;
    console.log(response);
    printResultsOnScreen(response);
  
};

function printResultsOnScreen(response){
    const template = '';
    response.map(function (song, index) {
        if (index => 200) {
            const title = song.trackName;
            const collection = song.collectionName;
            const id = song.trackId;
            const image = song.artworkUrl60;
            console.log(title);
            // console.log(collection);
            template += '<div> <p>${title}<p/> <div/>'
         } 
     })
}