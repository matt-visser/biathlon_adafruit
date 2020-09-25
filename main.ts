input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.runningLightsAnimation, 500)
    makerController.player1.press(ArcadeButton.A)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.X) > 0) {
        light.showRing(
        `white white white white white white green green green white`
        )
        pause(200)
        light.setAll(0x000000)
    }
})
