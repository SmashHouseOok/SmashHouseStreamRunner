'use strict';

$(function () {
console.log('setting commentary');

	nodecg.listenFor('ssbmCommentatorsUpdate', update);

	function update(data) {
		console.log('recieved commentary', data);
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