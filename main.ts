input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.runningLightsAnimation, 500)
    makerController.player1.press(ArcadeButton.A)
    if (true) {
    	
    } else {
    	
    }
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
