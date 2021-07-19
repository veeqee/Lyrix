//get all html elements
const input = document.getElementById('input');
const searchButton = document.getElementById('button');
const notFound = document.getElementById('none');
const artistName = document.getElementById('artise_name1');
const songName = document.getElementById('song_title');
const songYear = document.getElementById('song_year');
//const lyrics = document.getElementById('lyrics');



//add event listener to all button clicks
searchButton.addEventListener("click", makeRequest);



//define api variables(base_url, cors_url, api_key) using const keyword
const BASEURL = "http://api.musixmatch.com/ws/1.1";
const API_KEY = "f27d61633c75d6c395b56b932f658650";
const CORS = "https://cors.bridged.cc";
const track_search = "track.search?q_artist=";;
const page_size = "&page_size=1&page=0&s_track_rating=desc";

//create a function for button

async function makeRequest() {
    //declare a variable for all values entered
    let value = input.value;

    //if user entered nothing
    if (!value){
        alert("type song name");
        return
    }
    // api call and store it in variable 'url'
    const url = `${CORS}/${BASEURL}/${track_search}${value}&apikey=${API_KEY}${page_size}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result = data.message.body.track_list;

        console.log(result);

        //if no results found
        if (result.length === 0) {
            notFound.innerHTML = "Music not found";
        }
        else{
            //loop through
            result.forEach((single) => {
                console.log(single.track);

                //create new element
                const newElement1 = document.createElement('h2');
                const newElement2 = document.createElement('h2');
                const newElement3 = document.createElement('h2');
                const yearAvailable = single.track.track_year ? single.track.track_year : 'not updated';
                
                //assign trackname from api to the element created above
                newElement1.innerHTML = single.track.artist_name;
                newElement2.innerHTML = single.track.track_name;
                newElement3.innerHTML = yearAvailable;


                //insert the div created above to 'name' div on our html site
                artistName.appendChild(newElement1).style.color='white';
                
                songName.appendChild(newElement2).style.color='white';
                songYear.appendChild(newElement3).style.color='white';
                 
            });
            //set input field back to empty
            value = ""; 
        }
    }
    catch(error) {
        console.log(error);
    }

   
    

    console.log(url);

    console.log(value);
    console.log("a button was clicked");
}









