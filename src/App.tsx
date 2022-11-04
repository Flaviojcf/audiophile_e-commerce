import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default App
