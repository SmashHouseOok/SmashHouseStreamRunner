(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#timer-update');

        var timeString = nodecg.Replicant('timeString');

        var timer,
            timeInSeconds;


        function timeLoop(){
            timeInSeconds --;
            
            var hours = parseInt( timeInSeconds / 3600 ) % 24;
            var minutes = parseInt( timeInSeconds / 60 ) % 60;
            var seconds = timeInSeconds % 60;

            var result = '' + hours + ':' + minutes + ':' + seconds;
            document.querySelector('#timer').countdown = result;
        }

        function startTimer(){
            timer = setInterval(function(){timeLoop()}, 1000);
        }

        function setTimeInt(){
            var hours = parseFloat(timeString.match(/([0-9]{2})/)[1]);
            var minutes = parseFloat(timeString.match(/:([0-9]{2})/)[1]);
            var seconds = parseFloat(timeString.match(/.+?:.+?:([0-9]{2})/)[1]);

            timeInSeconds = hours*3600 + minutes*60 + seconds

            startTimer()
        }

		$update.click(function() {
            if(timer){
                clearTimeout(timer);
                timer = void 0;
            }
            else {
                timeString = document.querySelector('#timer').countdown;
                setTimeInt();
            }
		});
	});
})();