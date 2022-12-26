var phrases = [
    'I develop in Java',
    'I sell human remains',
    'I create stuff',
    'I am a developer',
    'I have a cool community',
    'I am not good at web development',
    '42',
    'I code minecraft mods'
];

var phraseElement = document.getElementById('phrase');

phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];

const currentMonth = new Date().getMonth();

var sound = null;

if (currentMonth === 11) {
    sound = document.getElementById('sound2');
} else {
    sound = document.getElementById('sound');
}

var image = document.getElementById("pfp");
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