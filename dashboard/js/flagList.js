'use strict';

(function() {
    var flagList = [
        'Australia',
        'Austria',
        'Belgium',
        'Canada',
        'Denmark',
        'Egypt',
        'England',
        'France',
        'French Guiana',
        'Germany',
        'Hong Kong',
        'Ireland',
        'Italy',
        'Northern Ireland',
        'Norway',
        'Scotland',
        'Spain',
        'Sudan',
        'Sweden',
        'Switzerland',
        'Netherlands',
        'USA',
        'Wales'
    ]

    function setCharacterList (player) {
        var p1box = document.getElementById("character" + player);

        function addOption (selectbox, text, value) {
            var optn = document.createElement("OPTION");
            optn.text = text;
            optn.value = value;
            selectbox.options.add(optn);  
        }

        for (var i = 0; i < characterList.length; i++) {
            addOption(p1box, characterList[i], i);   
        };
    };

    window.flagList = flagList;
})();