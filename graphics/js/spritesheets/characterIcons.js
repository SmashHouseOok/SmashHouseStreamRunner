'use strict';

$(function () {
    function charIconsSSLoaded () {
        console.log('lol');
        var spriteSheet = document.getElementById("charIconsSS");

        var player1Canvas = document.getElementById('p1char').getContext('2d');
        var player2Canvas = document.getElementById('p2char').getContext('2d');

        console.log(spriteSheet);
        player1Canvas.drawImage(spriteSheet, 0 ,0);
    }

    window.charIconsSSLoaded = charIconsSSLoaded;
});