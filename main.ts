input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
