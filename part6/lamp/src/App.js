import React from "react"
import Lamp from "./components/Lamp"
import { SimpleGrid, Box, Heading, Center } from "@chakra-ui/react"

const App = () => {
  return (
    <>
      <Box m={6}>
        <Center>
          <Heading>Lampu</Heading>
        </Center>
      </Box>

      <Box mt={10} p={8}>
        <SimpleGrid columns={{ sm: 3, md: 6 }} spacing={2}>
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default App
