'use strict';

$(function () {
console.log('setting score');

	nodecg.listenFor('ssbmScoreboardUpdate', update);

	function update(data) {
		console.log('recieved scoreboard', data);
		var toggle = false;
		updatePlayers(data);
	}

	function updatePlayers(data) {
        console.log('updating players');
		setText(data);
	}

	function setText(data) {
		$('#p1tag').text(data.p1Tag);
		$('#p1score').text(data.p1Score);
		$('#p2tag').text(data.p2Tag);
		$('#p2score').text(data.p2Score);
		$('#roundName').text(data.roundName);
	}
});