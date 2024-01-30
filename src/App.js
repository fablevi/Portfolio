import { useState } from "react";
import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"

function App() {
  if (localStorage.getItem("componentScheme") == 'undefined') {
    localStorage.setItem("componentScheme", "light");
  }

  const [componentScheme, setComponentScheme] = useState(localStorage.getItem("componentScheme"));

  return (
    <>
      <Provider theme={defaultTheme}>
        <Button
          variant="secoundary"
          onClick={()=>{console.log(defaultTheme)}}
        >
          Hello React Spectrum!
        </Button>
      </Provider>
    </>
  );
}

export default App;
