'use strict';

(function() {
    var characterList = [
        'Fox',
        'Falco',
        'Marth',
        'Sheik',
        'Captain Falcon',
        'Peach',
        'Jigglypuff',
        'Ice Climbers',
        'Samus',
        'Luigi',
        'Ganondorf',
        'Doctor Mario',
        'Pikachu',
        'Link',
        'Mr Game and Watch',
        'Mario',
        'Zelda',
        'Roy',
        'Yoshi',
        'Donkey Kong',
        'Kirby',
        'Young Link',
        'Ness',
        'Pichu',
        'Bowser',
        'Mewtwo'
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

    window.characterList = characterList;
    window.setCharacterList = setCharacterList;
})();