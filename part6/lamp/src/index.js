import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider>
    <div>
      <App />
    </div>
  </ChakraProvider>
)
