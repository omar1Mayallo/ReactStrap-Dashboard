import {useContext} from "react";
import {Button} from "reactstrap";
import {ThemeProvider} from "styled-components";
import ThemeContext from "./contexts/theme";
import {GlobalStyles} from "./styles/styles";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <ThemeProvider theme={{theme}}>
      <GlobalStyles />
      <div className="App">
        <Button onClick={() => toggleTheme(theme)}>toggle</Button>
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
