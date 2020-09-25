input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.runningLightsAnimation, 500)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
