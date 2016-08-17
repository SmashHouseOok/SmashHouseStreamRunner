'use strict';

$(function () {
    var spriteSheet,
        player1Canvas,
        player2Canvas,
        player1tmCanvas,
        player2tmCanvas;

    var playerData = nodecg.Replicant('playerData');

	playerData.on('change', function (newValue) {
		updatePlayers(newValue);
	})

    function charIconsSSLoaded () {
        spriteSheet = document.getElementById("charIconsSS");

        player1Canvas = document.getElementById('p1char').getContext('2d');
        player2Canvas = document.getElementById('p2char').getContext('2d');
        player1tmCanvas = document.getElementById('p1TMchar').getContext('2d');
        player2tmCanvas = document.getElementById('p2TMchar').getContext('2d');
    }

    function drawIcon (ctx, charNo, colourNo) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        console.log(charNo, colourNo);
        ctx.drawImage(spriteSheet, colourNo*24, charNo*24, 24, 24, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    function updatePlayers (newValue) {
        console.log(JSON.stringify(newValue));
        
        drawIcon(player1Canvas, newValue.p1Character, newValue.p1Colour);
        drawIcon(player2Canvas, newValue.p2Character, newValue.p2Colour);
        drawIcon(player1tmCanvas, newValue.p1tmCharacter, newValue.p1tmColour);
        drawIcon(player2tmCanvas, newValue.p2tmCharacter, newValue.p2tmColour);
    }
    window.charIconsSSLoaded = charIconsSSLoaded;
});