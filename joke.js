const jokeText = document.getElementById("joke");
const titleText = document.getElementById("title");

window.onload = () => {
    fetchJoke("Any", "Joke Of The Day");
};

function getJoke(category) {
    let pageTitle;

    if (category === "Pun") {
        pageTitle = "A Random Pun";
    } else {
        pageTitle = `A Random ${category} Joke`;
    }

    fetchJoke(category, pageTitle);
}

function fetchJoke(category, titleTextValue) {
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            titleText.textContent = titleTextValue;


            if (data.type === "single") {
                jokeText.textContent = data.joke;
            }

            else if (data.type === "twopart") {
                jokeText.textContent = `${data.setup} ... ${data.delivery}`;
            }
        })
        .catch(error => {
            jokeText.textContent = "Something went wrong >:c";
            console.error(error);
        });
}
