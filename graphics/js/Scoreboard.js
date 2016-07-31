'use strict';

$(function () {
	var playerData = nodecg.Replicant('playerData');
	
	playerData.on('change', function (newValue) {
		updatePlayers(newValue);
	})

	function updatePlayers(data) {
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