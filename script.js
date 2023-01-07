var phrases = [
    'a java developer',
    'a creator',
    'a developer',
    'an owner of a cool community',
    'not good at web development',
    'bad at coding minecraft mods',
    'bad at bunch of stuff',
    'always learning something new',
    'lost in my own thoughts... and code',
    'a master of the keyboard',
    'constantly improving my skills',
    'a coding machine',
    'a code wizard',
    'a coding ninja',
    'a code magician',
    'a coding prodigy',
    'a coding genius',
    'a coding virtuoso',
    'a coding savant',
    'a coding wizard in training',
    'a coding apprentice',
    'a coding Jedi (or Sith, depending on your preference)',
    'generating all of these phrases with an ai!',
    'a coding master',
    'a coding mastermind',
    'a coding master of the universe',
    'a coding master of the multiverse',
    'a coding master of the omniverse',
    'a coding master of the omniverse and beyond',
    'a software engineer',
    'a hacker (in the good sense)',
    'a digital alchemist',
    'a digital magician',
    'a person who has something happen when you click my name (or pfp)',
];

var phraseElement = document.getElementById('phrase');
var titleElement = document.getElementById('title');
var moreInfo = document.getElementById('more-info');


titleElement.addEventListener('click', function () {
    moreInfo.style.display = 'block';
});

function typeWriter() {

    var txt = phrases[Math.floor(Math.random() * phrases.length)];
    var i = 0;
    var speed = 50;

    function type() {
        if (i < txt.length) {
            phraseElement.textContent += txt.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(deletePhrase, 2000);
        }
    }

    function deletePhrase() {
        if (phraseElement.textContent.length > 5) {
            phraseElement.textContent = phraseElement.textContent.substring(0, phraseElement.textContent.length - 1);
            setTimeout(deletePhrase, 50);
        } else {
            typeWriter();
        }
    }

    setTimeout(type, 200);
}

typeWriter();


const currentMonth = new Date().getMonth();

var sound = document.getElementById('sound');

var image = document.getElementsByClassName("pfp")[0];
var modal = document.getElementById("modal");
var slider = document.getElementById("volume-slider");

slider.addEventListener('input', function() {
    sound.volume = slider.value / 100;
});


// Listen for the click event on the image
image.addEventListener("click", function() {
    // Play the sound
    sound.play();
    modal.style.display = "block";
});

modal.addEventListener("click", function(event) {
    // If the user clicks on the modal window, but not on the modal content, close the modal window
    if (event.target === this) {
        this.style.display = "none";
        sound.pause();
    }
});
moreInfo.addEventListener("click", function(event) {
    // If the user clicks on the modal window, but not on the modal content, close the modal window
    if (event.target === this) {
        this.style.display = "none";
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        moreInfo.style.display = "none";
        sound.pause();
    }
});