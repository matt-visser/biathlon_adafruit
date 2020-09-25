input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.runningLightsAnimation, 500)
    makerController.player1.press(ArcadeButton.A)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.Y))
    light.showRing(
    `white white white white white white white black white white`
    )
})
