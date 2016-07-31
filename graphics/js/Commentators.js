'use strict';

$(function () {
console.log('setting commentary');
	var commentatorData = nodecg.Replicant('commentatorData');

	commentatorData.on('change', function (newValue) {
		update(newValue);
	})

	function update(data) {
		var toggle = false;
		setText(data);
	}

	function setText(data) {
		$('#c1tag').text(data.c1Tag);
		$('#c1twitter').text(data.c1Twitter);
		$('#c2tag').text(data.c2Tag);
		$('#c2twitter').text(data.c2Twitter);
	}
});