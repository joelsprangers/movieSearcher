

//elements
const radioButtons = document.querySelectorAll('input[name="filter"]');
const movieList = document.querySelector(".movie-list");
const movieItem = document.querySelector(".movie-item");
const movieInput = movies;

//filters
const movieLatest = movieInput.filter(movie => parseInt(movie.Year) > 2013);
const movieAvengers = movieInput.filter(movie => movie.Title.toLowerCase().includes("avengers"));
const movieXmen = movieInput.filter(movie => movie.Title.toLowerCase().includes("x-men"));
const moviePrincess = movieInput.filter(movie => movie.Title.toLowerCase().includes("princess"));
const movieBatman = movieInput.filter(movie => movie.Title.toLowerCase().includes("batman"));

//const movieIMG = document.querySelector(".movie-image");
//const movieRedirect = document.querySelector(".movie-redirect");

const addMoviesToDom = (movieInput) => movieInput.forEach(movie => {
    const addMovie = document.createElement("li");
    const addImg = document.createElement("img");
    const addA = document.createElement("a");

    //class tag
    addMovie.classList.add("movie-item");

    //img tags
    addImg.classList.add("movie-image", "movie__display");
    addImg.src = movie.Poster;
    addImg.alt = "movie-poster";

    //href tags
    addA.href = "https://www.imdb.com/title/" + movie.imdbID;
    addA.classList.add("movie-redirect");
    addA.target = "_blank";

    addMovie.appendChild(addImg);
    addMovie.appendChild(addA);
    movieList.appendChild(addMovie);
})

const removeAllMoviesFromDom = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.lastChild);
    }
}

console.log(movieList.firstElementChild);


//hier komt de switch
addMoviesToDom(movieInput);

console.log(movieList);

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





