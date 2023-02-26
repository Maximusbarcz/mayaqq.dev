
// Select the star container
const starContainer = document.querySelector(".star-container");

//create an array of strings
const names = [
    // ["Name", "Link", "Description", "Image"],
    ["Mayaqq.dev", "https://mayaqq.dev", "The website you're on right now!", "media/avtar.webp"],
    ["Endless", "https://github.com/MayaqqDev/Endless", "Discover the mysteries of the End dimension like never before in \"Endless\"! Explore new lands, find hidden secrets, and unravel the unknown as you embark on an adventure like no other.", "https://github.com/MayaqqDev/Endless/blob/1.19/src/main/resources/assets/endless/icon.png?raw=true"],
    ["Spectrum Jetpacks", "https://github.com/MayaqqDev/Spectrum-Jetpacks", "Jetpacks but its gay", "https://github.com/MayaqqDev/spectrum-jetpacks/blob/1.19/src/main/resources/assets/spectrumjetpacks/icon.png?raw=true"],
    ["Classroomtils", "https://github.com/MayaqqDev/Classroomtils", "A firefox plugin for google classroom!", ""],
    ["Ygasi", "https://github.com/MayaqqDev/Ygasi", "A Server-side Fabric mod with skill tree and leveling!", "https://github.com/MayaqqDev/Ygasi/blob/1.19/src/main/resources/assets/ygasi/icon.png?raw=true"],
    ["ChatToggle", "https://github.com/MayaqqDev/ChatToggle", "Adds toggels for chat, originally made for FTB Teams but can be used in other scenarios as well.", ""],
    ["Calcium", "https://github.com/MayaqqDev/Calcium", "The best very serious optimization mod for Minecraft!", "https://github.com/MayaqqDev/Calcium/blob/1.19/src/main/resources/assets/calcium/icon.png?raw=true"],
    ["Modlister", "https://github.com/MayaqqDev/Modlister", "A java program that lists all the mods in a given folder.", ""],
    ["Shade-bot", "https://github.com/MayaqqDev/Shade-bot", "A discord bot that does stuff.", "https://images-ext-1.discordapp.net/external/bWpIC62Fv96oerqgZiT0fjk3Wbg1pjyXcGy-YXINSLE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1006536030733729873/c2d4e4b6b6faefb14f9a2292ebe376ef.png?width=885&height=885"],
    ["Scorebar", "https://github.com/MayaqqDev/Scorebar", "Allows you to disable the scoreboard and bossbar in Minecraft.", "https://github.com/MayaqqDev/Scorebar/blob/1.19/src/main/resources/assets/scorebar/icon.png?raw=true"],
    ["AutoWB", "https://github.com/MayaqqDev/AutoWB", "Mod that automatically says welcome back to players that join back into hypixel in your guild or friends list!", "https://github.com/MayaqqDev/AutoWB/blob/master/src/main/resources/logoplaceholder.png?raw=true"],
];

// Create a function to generate the stars
function genStars() {
    // Remove any existing stars
    starContainer.innerHTML = '';
    // Generate the stars
    const starCount = names.length;
    console.log("Star count: " + starCount);
    for (let i = 0; i < starCount; i++) {
        // Create a new div element for the star
        let star = document.createElement("div");
        // Give the star a class name
        star.classList.add("star");
        // Set the data-star-id attribute of the star
        star.setAttribute("data-star-id", i);
        // Generate random positions for the star
        let x = Math.floor(Math.random() * (window.innerWidth - 50));
        let y = Math.floor(Math.random() * (window.innerHeight - 50));
        // Set the star's position
        star.style.top = y + "px";
        star.style.left = x + "px";
        // Append the star to the star container
        starContainer.appendChild(star);

        // Add a tooltip to the star using Tippy.js
        star.addEventListener("click", function() {
            window.open(names[i][1]);
        });
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = `<div class="tooltip-title">${names[i][0]}</div><div class="tooltip-description">${names[i][2]}</div><img src="${names[i][3]}" alt="icon" class="tooltip-icon">`;
        tippy(star, {
            content: tooltip.innerHTML,
            placement: 'top',
            arrow: true,
            followCursor: true,
            animation: 'shift-away',
            theme: 'tooltip',
            duration: [200, 200],
            allowHTML: true,
        });
    }
}

// Call the genStars function to generate the stars
genStars();

let back = document.getElementsByClassName("back")[0];
tippy(back, {
    content: "<Strong>Back to the homepage</Strong>",
    placement: 'bottom',
    arrow: true,
    followCursor: true,
    animation: 'shift-away',
    theme: 'tooltip',
    duration: [200, 200],
    allowHTML: true,
});
// Regenerate the stars when the window is resized
window.addEventListener('resize', genStars);