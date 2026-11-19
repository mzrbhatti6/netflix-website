
// Play Button
function playMovie() {
    alert("Enjoy watching! This is a static Netflix demo.");
}

// More Info Button
function showInfo() {
    alert(
        "Welcome to Netflix! Explore trending movies, " +
        "popular movies and your favorite TV shows."
    );
}

// Sign In Button
document.querySelector(".login-btn").addEventListener("click", function() {
    alert("Sign In functionality is not available in this static demo.");
});

// Movie Search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {

        const title = movie.dataset.title.toLowerCase();

        if (title.includes(searchValue)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });
});

// Movie Card Click
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const movieName = card.dataset.title;

        alert("You selected: " + movieName);

    });

});
