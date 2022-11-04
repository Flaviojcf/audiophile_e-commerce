import { ThemeProvider } from 'styled-components'
import { ProductCategoriesNavigator } from './components/ProductCategoriesNavigator'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProductCategoriesNavigator />
    </ThemeProvider>
  )
}

export default App
