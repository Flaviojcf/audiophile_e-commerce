import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { CartContextProvider } from './context/CartContext'

function App () {
  return (
    <CartContextProvider>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    </CartContextProvider>
  )
}

export default App
