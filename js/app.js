
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
    // console.log(response);
    printResultsOnScreen(response);
  
};

const printResultsOnScreen = (response)=>{
    
    let template = ``;
    let counter = 0;
    // console.log(container);
    response.forEach(function (song, index) {
        if (index => 200) {
            const title = song.trackName;
            const collection = song.collectionName;
            const id = song.trackId;
            const image = song.artworkUrl60;
            counter += 1;
            // console.log(title);
            // console.log(collection);
            template +=`<div class="row song">
            
            <div class="col 12linfo-container"> 
                <div class="row info">
                    <div class="col 1l counter">${counter}</div>
                    <div class="col 1l image"><img src="${image}"></div>
                    <div class="col 10l">
                        <p class="title"><strong>${title}</strong></p>
                        <p class="track-collection">${collection}</p>
                    </div>
                </div>
            </div>
            
            <div class="col 2l offset-3l id">${id}</div>
            
     <hr>
            </div>`
            // const songContainer = document.createElement('div');
            // songContainer.innerText=title;
            // container.append(songContainer)
            console.log(template);
            const container = document.getElementById('songs-container');
            container.innerHTML = template;
         }     
    
     })
    
  
}