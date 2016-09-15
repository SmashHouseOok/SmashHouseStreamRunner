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

    function flagsSSLoaded () {
        spriteSheet = document.getElementById("flagsSS");

        player1Canvas = document.getElementById('p1flag').getContext('2d');
        player2Canvas = document.getElementById('p2flag').getContext('2d');
        player1tmCanvas = document.getElementById('p1TMflag').getContext('2d');
        player2tmCanvas = document.getElementById('p2TMflag').getContext('2d');
    }

    function drawIcon (ctx, flagNo) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(spriteSheet, 0, flagNo*53, 80, 53, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    function updatePlayers (newValue) {
        console.log(JSON.stringify(newValue));
        
        drawIcon(player1Canvas, newValue.p1Flag);
        drawIcon(player2Canvas, newValue.p2Flag);
        drawIcon(player1tmCanvas, newValue.p1tmFlag);
        drawIcon(player2tmCanvas, newValue.p2tmFlag);
    }
    window.flagsSSLoaded = flagsSSLoaded;
});