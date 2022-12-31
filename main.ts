radio.onReceivedString(function (onReceivedString) {
    if (onReceivedString == "gt") {
        basic.showString("gt")
        radio.sendNumber(input.temperature())
    }
})
radio.setGroup(1)

