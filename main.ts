input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 150) {
        music.playMelody("C D E F G A B C5 ", 300)
    }
    if (input.lightLevel() < 150) {
        music.playMelody("C5 B A G F E D C ", 300)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 150) {
        basic.showLeds(`
            . # # # #
            # # # . .
            # # . . .
            # # # . .
            . # # # #
            `)
    }
})
