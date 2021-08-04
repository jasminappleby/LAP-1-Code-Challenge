


document.querySelector("form").addEventListener('submit', getListings)

function getListings(e){
    e.preventdefault();
    let search = "love island"
    let searchFormatted = search.toLowerCase().replace(" ", "-")
    fetch(`http://localhost:8000/results/${searchFormatted}`)
    .then(response => response.JSON())
    .then(results => console.log(results))

}

