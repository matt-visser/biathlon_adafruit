input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.pewPew.play()
    light.showAnimation(light.theaterChaseAnimation, 200)
    light.showRing(
    `black black black black black black black black black black`
    )
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, -1 * input.acceleration(Dimension.Y))
})
