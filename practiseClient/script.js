

let form = document.querySelector("form");
form.addEventListener('submit',

    async (e) => {
        e.preventDefault()
        clearContent();
        let search = e.target.searchWord.value
        console.log(search)
        let searchFormatted = search.toLowerCase().replace(" ", "-")
        let listings;
        // let search = "love island"
        // let searchFormatted = search.toLowerCase().replace(" ", "-")
        await fetch(`http://localhost:8000/results/${searchFormatted}`)
            .then(response => response.json())
            .then(results => listings = results)
            .catch(err => console.log(`whoops, ${err}`));
        seperateInformation(listings)

        // document.querySelector("#text").textContent = JSON.stringify(listings)
    })


function clearContent() {
    document.querySelector("section").textContent = ""
}


function seperateInformation(searchResults) {
    console.log(searchResults)
    for (const listItem of searchResults) {

        let listingContainer = document.createElement("div")
        let url = document.createElement('span')
        url.textContent = listItem.url
        let pageTitle = document.createElement('h3')
        pageTitle.textContent = listItem.pageTitle
        let text = document.createElement('p')
        text.textContent = listItem.text

        listingContainer.appendChild(url)
        listingContainer.appendChild(pageTitle)
        listingContainer.appendChild(text)

        document.querySelector("section").appendChild(listingContainer)

    }
}


// module.exports = {getListings}