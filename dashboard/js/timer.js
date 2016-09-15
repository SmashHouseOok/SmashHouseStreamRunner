(function() {
	'use strict';
	window.addEventListener('WebComponentsReady', function(e) {
		var $update = $('#timer-update');

        var timeReplicant = nodecg.Replicant('timeString');

        var timer,
            timeString,
            timeInSeconds;

        function makeTwoDigitString(number){
            var result = ''
            if(number < 10) {
                result = "0" + number;
            } else {
                result = number;
            }

            return result;
        }

        function timeLoop(){
            if (timeInSeconds > 0 ) {
                timeInSeconds --;
            }

            var hours = makeTwoDigitString(parseInt( timeInSeconds / 3600 ) % 24);
            var minutes = makeTwoDigitString(parseInt( timeInSeconds / 60 ) % 60);
            var seconds = makeTwoDigitString(timeInSeconds % 60);

            var result = '' + hours + ':' + minutes + ':' + seconds;
            document.querySelector('#timer').countdown = result;
            timeReplicant.value = {
                'timeRemaining': result
            };
            console.log(timeReplicant.value);
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
                timeReplicant.value = timeString;
                setTimeInt();
            }
		});
	});
})();