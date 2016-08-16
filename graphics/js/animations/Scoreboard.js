'use strict'

$(function () {
    function animateText() {
        $('#SBtext').fadeTo( "slow", 1)
    }

    function moveSb() {
        $('#SB').animate({
            top: 0
        }, 2000, 'swing', animateText);
    }

    function animateSbBackground() {
        var moveDistance = 80;

        $('#SB').css({
            top: -moveDistance
        });

        $('#SBtext').css({
            opacity: 0
        })
        var animationTimeout = window.setTimeout(moveSb, 300);
    }

    window.animateSbBackground = animateSbBackground;
});