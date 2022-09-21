let temp = 0
basic.forever(function () {
    temp = input.temperature()
    if (temp == 10) {
        basic.showNumber(temp)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (temp == 20) {
        basic.showNumber(temp)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (temp == 30) {
        basic.showNumber(temp)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
    } else if (temp == 40) {
        basic.showNumber(temp)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showNumber(temp)
    }
})
