(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#ssbm-scoreboard-update');
		var playerData = nodecg.Replicant('playerData', updateData());

		$update.click(function() {
			playerData.value = updateData();
		});

		function updateData() {
            return {
                'p1Tag': document.querySelector('#player1').getTag(),
                'p1Score': document.querySelector('#player1').getScore(),
				'p1Character': document.querySelector('#player1').getCharacter(),
				'p1Colour': document.querySelector('#player1').getColour(),
				'p1tmCharacter': document.querySelector('#player1').getTeamMateCharacter(),
				'p1tmColour': document.querySelector('#player1').getTeamMateColour(),
                'p2Tag': document.querySelector('#player2').getTag(),
                'p2Score': document.querySelector('#player2').getScore(),
				'p2Character': document.querySelector('#player2').getCharacter(),
				'roundName': document.querySelector('#roundName').getRoundName(),
				'p2Colour': document.querySelector('#player2').getColour(),
				'p2tmCharacter': document.querySelector('#player2').getTeamMateCharacter(),
				'p2tmColour': document.querySelector('#player2').getTeamMateColour(),
            };
		}
	});
})();