(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#ssbm-scoreboard-update');
		var playerData = nodecg.Replicant('playerData', updateData());

		$update.click(function() {
			playerData.value = updateData();
			console.log(playerData.value);
		});

		function updateData() {
			console.log(document.querySelector('#player1').getCharacter());
            return {
                'p1Tag': document.querySelector('#player1').getTag(),
                'p1Score': document.querySelector('#player1').getScore(),
				'p1Character': document.querySelector('#player1').getCharacter(),
                'p2Tag': document.querySelector('#player2').getTag(),
                'p2Score': document.querySelector('#player2').getScore(),
				'p2Character': document.querySelector('#player2').getCharacter(),
				'roundName': document.querySelector('#roundName').getRoundName()
            };
		}
	});
})();