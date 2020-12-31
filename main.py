while True:
    # if light level is greater than 6, then set neopixels off
    print("light Level: " + str(input.light_level()))
    if input.light_level() >= 9:
        light.clear()
    elif input.light_level() <= 6:
        # if light level is greater than 2, then dim neopixels red
        light.set_brightness(15)
        light.set_all(color.rgb(255, 0, 0))
    else:
        light.set_all(color.rgb(255,69,0))