while (true) {
    //  if light level is greater than 6, then set neopixels off
    console.log("light Level: " + ("" + input.lightLevel()))
    if (input.lightLevel() >= 9) {
        light.clear()
    } else if (input.lightLevel() <= 6) {
        //  if light level is greater than 2, then dim neopixels red
        light.setBrightness(15)
        light.setAll(color.rgb(255, 0, 0))
    } else {
        light.setAll(color.rgb(255, 69, 0))
    }
    
}
