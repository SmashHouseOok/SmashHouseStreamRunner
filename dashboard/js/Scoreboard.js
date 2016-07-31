(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#ssbm-scoreboard-update');
		var playerData = nodecg.Replicant('playerData', updateData());

		playerData.on('change', function(newValue, oldValue) {
			if(oldValue !== void 0) {
				console.log(JSON.stringify(oldValue));
			}
			if(newValue !== void 0) {
				console.log(JSON.stringify(newValue));
			}
		});

		$update.click(function() {
			playerData.value = updateData();
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