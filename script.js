// JP 

const text = [{
    'headline': 'Zufallsgenerator für Fakten',
    'buttonText': 'Neuer Fakt'
},
{
    'headline': 'Random facts generator',
    'buttonText': 'New Fact'
}
]


const setTexts = () => {
    let texts = currentLang === 'de' ? text[0] : text[1];
    document.querySelector('h1').innerHTML = texts.headline;
    document.querySelector('#regenerate-fact-btn > span').innerHTML = texts.buttonText;
}

const regenerateFactButton = document.getElementById('regenerate-fact-btn');
let output = document.querySelector('p.fact-text');
let currentLang = 'de';
let baseUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=';
let fetchUrl = baseUrl + currentLang;

let mainLang = document.querySelector('.main-lang');
let secoundLang = document.querySelector('.secound-lang');
let langSlider = document.querySelector('.lang-slider');

secoundLang.addEventListener('click', () => {
    fetchUrl = baseUrl + 'en'
    currentLang = 'en';
    setTexts();
    langSlider.classList.add('turn-right');
});

mainLang.addEventListener('click', () => {
    fetchUrl = baseUrl + 'de'
    currentLang = 'de';
    setTexts();
    langSlider.classList.remove('turn-right');
});




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
    setTexts();
    printRandomFact();
    // Button to regenerate fact
    regenerateFactButton.addEventListener('click', printRandomFact);



}

/// Starts the APP
init();