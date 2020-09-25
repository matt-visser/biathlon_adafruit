input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.pewPew.play()
    light.showAnimation(light.theaterChaseAnimation, 500)
    makerController.player1.press(ArcadeButton.A)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, -1 * input.acceleration(Dimension.Y))
})
