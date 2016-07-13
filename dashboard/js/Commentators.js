(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#ssbm-commentators-update');
		$update.click(function() {
			console.log(updateData());
			nodecg.sendMessage('ssbmCommentatorsUpdate', updateData());
		});

		function updateData() {
            return {
                'c1Tag': document.querySelector('#commentator1').getTag(),
                'c1Twitter': document.querySelector('#commentator1').getTwitter(),
                'c2Tag': document.querySelector('#commentator2').getTag(),
                'c2Twitter': document.querySelector('#commentator2').getTwitter(),
            };
		}
	});
})();