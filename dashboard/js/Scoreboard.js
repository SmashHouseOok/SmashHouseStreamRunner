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
				'p1Flag' : document.querySelector('#player1').getFlag(),
				'p1tmTag': document.querySelector('#player1').getTeamMateTag(),
				'p1tmCharacter': document.querySelector('#player1').getTeamMateCharacter(),
				'p1tmColour': document.querySelector('#player1').getTeamMateColour(),
				'p1tmFlag': document.querySelector('#player1').getTeamMateFlag(),
                'p2Tag': document.querySelector('#player2').getTag(),
                'p2Score': document.querySelector('#player2').getScore(),
				'p2Character': document.querySelector('#player2').getCharacter(),
				'p2Flag' : document.querySelector('#player2').getFlag(),
				'p2Colour': document.querySelector('#player2').getColour(),
				'p2tmTag': document.querySelector('#player2').getTeamMateTag(),
				'p2tmCharacter': document.querySelector('#player2').getTeamMateCharacter(),
				'p2tmColour': document.querySelector('#player2').getTeamMateColour(),
				'p2tmFlag': document.querySelector('#player2').getTeamMateFlag(),
				'roundName': document.querySelector('#roundName').getRoundName(),
            };
		}
	});
})();