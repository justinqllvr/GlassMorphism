const img = document.getElementById('img-Section')
const phrase = document.querySelector('p');
const author = document.querySelector('h3')
const phraseArray = ['Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles.','La meilleure façon de prédire l’avenir est de le créer. ','Le désir de bien faire est un puissant moteur. Celui de faire du bien est plus puissant encore.','Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.','Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse.','Le pessimisme est affaire d’humeur, l’optimisme est affaire de volonté.','Vous ne trouverez jamais ce que vous ne cherchez pas','Si vous pensez que vous ne valez pas grand-chose, vous ne trouverez personne pour augmenter votre prix.','La sagesse suprême, c’est d’avoir des rêves assez grands pour ne pas les perdre de vue pendant qu’on les poursuit.','Si vous pouvez le rêver, vous pouvez le faire']
const authorArray = ['Oscar Wilde','Peter Drucker','Michael Aguilar','Martin Luther King','Proverbe','Emile-Auguste Alain','Confucius','Michael Aguilar','Francis Scott Fitzgerald','Walt Disney']
let random = Math.floor(Math.random() * Math.floor(10)) +1;

img.style.backgroundImage = "url('Image" + random + ".png')"
phrase.innerHTML = phraseArray[random-1]
author.innerHTML = authorArray[random-1]


const randomBackground = () => {
    let random = Math.floor(Math.random() * Math.floor(10)) +1;
    img.style.backgroundImage = "url('Image" + random + ".png')";
    phrase.innerHTML = phraseArray[random-1]
    author.innerHTML = authorArray[random-1]
}

VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glaire": 1,
});