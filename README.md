<style>.linkImg {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    margin-top: 10px;
}
.linkImg:hover {
    transform: scale(1.2);
}

.pfp {
    border-radius: 50%;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    padding: 5px;
}

.pfp:hover {
    transform: scale(1.2);
}

p {
    margin: 10px;
}
h1 {
    margin: 3px;
}

.bioDiv {
    text-align: center;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 0;

    color: white;
    font-family: "JetBrains Mono", monospace;
    font-size: 20px;

    animation: fadein 1s ease-in-out;
}

@keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
}

.container {
    display: flex;
    flex-direction: column;
    background: #181A1B
}
</style>


<body class="container">
    <link rel="stylesheet" href="styles.css">
    <div class="bioDiv">
        <a><img src="https://cdn.discordapp.com/avatars/698623223872356413/5595dd6f48bfeb1ddf3aaefcb608538b.png?size=1024" width="150" class="pfp" alt="Pfp" id="pfp"/></a>
        <h1>Mayaqq</h1>
        <p id = phrase>My website</p>
        <a href="https://github.com/MayaqqDev"><img src="github.svg" class="linkImg" alt="Github"/></a>
        <a href="https://discord.gg/w7PpGax9Bq"><img src="discord.svg" class="linkImg" alt="Discord"> </a>
    </div>
</body>