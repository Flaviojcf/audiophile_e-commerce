import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return <ThemeProvider theme={defaultTheme}></ThemeProvider>;
}

export default App;
