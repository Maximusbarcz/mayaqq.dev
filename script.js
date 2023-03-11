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

const phraseElement = document.getElementById('phrase');
const image = document.getElementsByClassName("pfp")[0];
const uwu = document.getElementById("uwu");
const video = document.getElementsByTagName('video')[0];
const slider = document.getElementById("uwu-video-slider");
const playButton = document.getElementById("uwu-play");
const sound = document.getElementById("uwu-volume-slider");
let pride = document.getElementById("pride-counter");
let death = document.getElementById("die-counter");
let birthday = document.getElementById("birthday-counter");
let github = document.getElementById("github");
let discord = document.getElementById("discord");
let kofi = document.getElementById("kofi");
let playlist = document.getElementById("playlist");
let scroll = document.getElementsByClassName("arrow-down-container");

// typewriter code:

function typeWriter() {

    const txt = phrases[Math.floor(Math.random() * phrases.length)];
    let i = 0;
    const speed = 50;

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

// event listerners:

scroll[0].addEventListener("click", function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

scroll[1].addEventListener("click", function() {
    window.scrollTo({
        top: window.innerHeight + window.innerHeight,
        behavior: "smooth"
    });
});

image.addEventListener("click", function() {
    // Play the sound
    //sound.play();
    video.play();
    uwu.style.display = "block";
});

playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        } else {
        video.pause();

    }
});

sound.addEventListener("input", function() {
    video.volume = this.value;
});

uwu.addEventListener("click", function(event) {
    // If the user clicks on the modal window, but not on the modal content, close the modal window
    if (event.target === this) {
        this.style.display = "none";
        video.pause();
        slider.max = video.duration;
        slider.value = video.currentTime;
    }
});

slider.addEventListener("input", function() {
    video.currentTime = this.value;
});

video.addEventListener("timeupdate", function() {
    slider.value = this.currentTime;
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        uwu.style.display = "none";
        video.pause();
        video.currentTime = 0;
        window.scrollTo({
            //scroll to the top of the page
            top: 0,
            behavior: "smooth"
        });
    }
});

// counters

const today = new Date();

const june = new Date(today.getFullYear(), 5, 1);

const diffMs = june.getTime() - today.getTime();

const birthdayDate = new Date(today.getFullYear(), 10, 24);

const diffMs2 = birthdayDate.getTime() - today.getTime();

const birthdayDays = Math.floor(diffMs2 / (1000 * 60 * 60 * 24)) + 1;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

pride.innerHTML = "Days until pride month: " + diffDays + " days";
death.innerHTML = "Days until I die: " + Math.floor(Math.random() * 1000) + " days";
birthday.innerHTML = "Days until my birthday: " + birthdayDays + " days";

// tooltips

tippy(github, {
        content: "<Strong>Github</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)

tippy(discord, {
        content: "<Strong>Discord</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)

tippy(kofi, {
        content: "<Strong>Ko-fi</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)

tippy(playlist, {
        content: "<Strong>My playlist!</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)

tippy(pride, {
        content: "<Strong>Wooo! pride month!</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)

tippy(death, {
        content: "<Strong>I am fine :)</Strong>",
        placement: 'bottom',
        arrow: true,
        followCursor: true,
        animation: 'shift-away',
        theme: 'tooltip',
        duration: [200, 200],
        allowHTML: true,
    }
)