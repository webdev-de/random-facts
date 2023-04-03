// JP 
const regenerateFactButton = document.getElementById('regenerate-fact-btn');
let output = document.querySelector('p.fact-text');
let fetchUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=de';

// fetch(fetchUrl)
// .then(response => response.json())
// .then(data => output.innerHTML = data.text)


async function customFetch(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

async function printRandomFact() {
    output.innerHTML = 'Loading...';
    regenerateFactButton.disabled = true;
    const fact = await customFetch(fetchUrl)
    output.innerHTML = fact.text;
    regenerateFactButton.disabled = false;
}


function init() {
    printRandomFact();
    // Button to regenerate fact
    regenerateFactButton.addEventListener('click', printRandomFact);
}

/// Starts the APP
init();