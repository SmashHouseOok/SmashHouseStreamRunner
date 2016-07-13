(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#ssbm-scoreboard-update');
		var $swap = $('#ssbm-players-swap');
		$update.click(function() {
			console.log(updateData());
			nodecg.sendMessage('ssbmScoreboardUpdate', updateData());
		});

		function updateData() {
            return {
                'p1Tag': document.querySelector('#player1').getTag(),
                'p1Score': document.querySelector('#player1').getScore(),
                'p2Tag': document.querySelector('#player2').getTag(),
                'p2Score': document.querySelector('#player2').getScore(),
				'roundName': document.querySelector('#roundName').getRoundName()
            };
		}
	});
})();