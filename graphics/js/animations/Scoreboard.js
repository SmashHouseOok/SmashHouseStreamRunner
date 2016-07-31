'use strict'

$(function () {
    function animateText() {
        $('#SBtext').fadeTo( "slow", 1)
    }

    function moveSb() {
        $('#SB').animate({
            top: 0
        }, 2000, animateText);
    }

    function animateSbBackground() {
        var moveDistance = 80;

        $('#SB').css({
            top: -moveDistance
        });

        $('#SBtext').css({
            opacity: 0
        })
        var animationTimeout = window.setTimeout(moveSb, 400);
    }

    window.animateSbBackground = animateSbBackground;
});