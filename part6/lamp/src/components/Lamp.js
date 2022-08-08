import React, { useState } from "react"
import { Image, Box, Stack, Switch } from "@chakra-ui/react"

const Lamp = () => {
  const [lamp, setLamp] = useState(0)

  const clickHandler = (e) => {
    setLamp(!lamp)
  }

  return (
    <Box>
      <Stack align="center">
        <Image
          boxSize="150px"
          objectFit="cover"
          src={lamp ? "./bulb1.png" : "./bulb0.png"}
          alt="lamp"
        />
        <Switch onChange={clickHandler} isChecked={lamp} size="sm" />
      </Stack>
    </Box>
  )
}

export default Lamp
