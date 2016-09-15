'use strict';

$(function () {
	var timeString = nodecg.Replicant('timeString');

	timeString.on('change', function (newValue) {
		update(newValue);
	})

	function update(data) {
		if(data !== void 0){
			console.log(data);
			setText(data);
		}
	}

	function setText(data) {
		$('#timeString').text(data.timeRemaining);
	}
});