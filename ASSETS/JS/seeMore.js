

const seeMore = document.getElementById('seeMore');
const lyrics = document.getElementById('lyrics');

searchButton.addEventListener("click", makeRequest1);

const BASEURL = "http://api.musixmatch.com/ws/1.1";
const API_KEY = "f27d61633c75d6c395b56b932f658650";
const CORS = "https://cors.bridged.cc";
const track_search = "track.search?q_artist=";
const track_lyric = "track.lyrics.get?track_id=15953433";
const page_size = "&page_size=1&page=0&s_track_rating=desc";
const page_size1 = "&page_size=10&page=10&s_track_rating=desc";


async function makeRequest1() {
    //declare a variable for all values entered
    let value = input.value;

    //null --- check if user entered something
    /* if (!value){
        alert("please enter a value");
        return
    } */

    
    // call the api and store it in a variable called url
    const url = `${CORS}/${BASEURL}/${track_lyric}${value}&apikey=${API_KEY}${page_size1}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result = data.message.body.track_list.has_lyrics;

        console.log(result);

        //handle if no results found
        if (result.length === 0) {
            notFound.innerHTML = "cannot find the music LYRICS";
        }
        else{
            //loop through
            result.forEach((single) => {
                console.log(single.track,has_lyrics);

                //create a new element
                const lyrics = document.createElement('h2');
               /*  const newElement2 = document.createElement('h2');
                const newElement3 = document.createElement('h2'); */
                
                //assign trackname from api to the element created above
                lyrics.innerHTML = single.track.track_lyric;
              /*   newElement2.innerHTML = single.track.track_name;
                newElement3.innerHTML = single.track.track_year; */

                //insert the div created above to 'name' div on our html site
               
                
                songName.appendChild(lyrics).style.color='red';
                lyrics.appendChild(lyrics).style.color='red';
                //songYear.appendChild(newElement3).style.color='red';
                 
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


