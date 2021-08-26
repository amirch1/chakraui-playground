import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {MainView} from "./components/main-view";
import {colors} from "./styles/colors";
import {global} from "./styles/global";

const theme = {
    colors,
    styles: {
        global
    }
}
const customTheme = extendTheme(theme)

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <MainView></MainView>
  </ChakraProvider>
)
