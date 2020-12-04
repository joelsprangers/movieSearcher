

//elements
const radioButtons = document.querySelectorAll('input[name="filter"]');
const manualInput = document.querySelector('input[name="text-filter"]');
const movieList = document.querySelector(".movie-list");
const movieItem = document.querySelector(".movie-item");

const movieInput = movies;

//filters
const movieLatest = movieInput.filter(movie => parseInt(movie.Year) > 2013);
const movieFilter = (movieName) => movieInput.filter(movie => movie.Title.toLowerCase().includes(movieName));

const movieAvengers = movieFilter("avengers");
const movieXmen = movieFilter("x-men");
const moviePrincess = movieFilter("princess");
const movieBatman = movieFilter("batman");

const addMoviesToDom = (movieInput) => movieInput.forEach(movie => {
    const addMovie = document.createElement("li");
    const addImg = document.createElement("img");
    const addA = document.createElement("a");

    //class tag
    addMovie.classList.add("movie-item", "movie__gridbox");

    //img tags
    addImg.classList.add("movie-image", "movie__display");
    addImg.src = movie.Poster;
    addImg.alt = "movie-poster";

    //href tags
    addA.href = "https://www.imdb.com/title/" + movie.imdbID;
    addA.classList.add("movie-redirect");
    addA.target = "_blank";

    addMovie.appendChild(addImg);
    addA.appendChild(addImg);
    addMovie.appendChild(addA);
    movieList.appendChild(addMovie);
})

//remove all elements
const removeAllMoviesFromDom = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.lastChild);
    }
}

//switch
addMoviesToDom(movieInput);


//free search
let textInput = manualInput.addEventListener('change', (e) => {

    if (e.target.value != '') {
        let movieManual = movieFilter(e.target.value);
        removeAllMoviesFromDom();
        addMoviesToDom(movieManual);
    }
})

//switch
const filterInput = radioButtons.forEach(button => {
    button.addEventListener("change", function (e) {
        let currentFilter = e.target.id;

        switch (currentFilter) {
            case "movies-latest":
                removeAllMoviesFromDom();
                addMoviesToDom(movieLatest);
                break;
            case "movies-avengers":
                removeAllMoviesFromDom();
                addMoviesToDom(movieAvengers);
                break;

            case "movies-princess":
                removeAllMoviesFromDom();
                addMoviesToDom(moviePrincess);
                break;

            case "movies-batman":
                removeAllMoviesFromDom();
                addMoviesToDom(movieBatman);
                break;

            case "movies-x-men":
                removeAllMoviesFromDom();
                addMoviesToDom(movieXmen);
                break;

            default:
                addMoviesToDom(movieInput);
                break;
        }
    })

})





