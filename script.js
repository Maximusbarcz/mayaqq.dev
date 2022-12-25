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

// Get a reference to the p element
var phraseElement = document.getElementById('phrase');

// Set the text of the p element to a random phrase from the array
phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];

