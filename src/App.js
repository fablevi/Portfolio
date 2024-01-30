import { useState } from "react";
import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";

import LightIcon  from "./icons_set/LightIcon.jsx";
import DarkIcon from "./icons_set/DarkIcon.jsx";

function App() {
  if (!localStorage.getItem("componentScheme")) {
    localStorage.setItem("componentScheme", "light");
  }

  const [componentScheme, setComponentScheme] = useState(localStorage.getItem("componentScheme"));

  function changeComponentScheme() {
    if(componentScheme == "light"){
      setComponentScheme("dark")
      localStorage.setItem("componentScheme", "dark");
    }else{
      setComponentScheme("light")
      localStorage.setItem("componentScheme", "light");
    }
  }

  return (
    <Provider theme={defaultTheme} id="prov" colorScheme={componentScheme}>
     <div style={{ position: "absolute", padding: "1%", width: "100%", textAlign: "right" }}>
          <Button onPress={()=>{changeComponentScheme()}}>
            {componentScheme== "light"?
              <> <div style={{marginRight:"5px"}}><LightIcon width={"20"} height={"20"}/></div><p style={{marginTop:"14px", marginBottom:"14px"}}>Light</p> </> :
              <> <div style={{marginRight:"5px"}}><DarkIcon width={"20"} height={"20"}/></div><p style={{marginTop:"14px", marginBottom:"14px"}}>Dark</p></>}
            
          </Button>
        </div>
        <Container fluid>
          <Row>
            <Col style={{ backgroundColor: "red" }}>
              asd
            </Col>
            <Col style={{ backgroundColor: "blue" }}>
              asd
            </Col>
          </Row>
        </Container>
  </Provider>
  );
}

export default App;

/**
 * <Provider id="prov" colorScheme={componentScheme} theme={defaultTheme}>
        <div style={{ position: "absolute", top: "2%", width: "100%", textAlign: "center" }}>
          <Button>
            light
          </Button>
        </div>
        <Container fluid>
          <Row>
            <Col style={{ backgroundColor: "red" }}>
              asd
            </Col>
            <Col style={{ backgroundColor: "blue" }}>
              asd
            </Col>
          </Row>
        </Container>
      </Provider>
 */
