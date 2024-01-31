import { useState } from "react";
import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";
import "./App.css"

import LightIcon  from "./icons_set/LightIcon.jsx";
import DarkIcon from "./icons_set/DarkIcon.jsx";

import LeftBox from "./Components/Left/LeftBox.jsx";

function App() {
  if (!localStorage.getItem("componentScheme")) {
    localStorage.setItem("componentScheme", "light");
  }

  const [componentScheme, setComponentScheme] = useState(localStorage.getItem("componentScheme"));

  function changeComponentScheme() {
    if(componentScheme === "light"){
      setComponentScheme("dark")
      localStorage.setItem("componentScheme", "dark");
    }else{
      setComponentScheme("light")
      localStorage.setItem("componentScheme", "light");
    }
  }

  return (
    <Provider theme={defaultTheme} id="prov" colorScheme={componentScheme}>
     <div style={{ position: "absolute", padding: "1%", width: "100%", textAlign: "right", minHeight:"80px" }}>
          <Button onPress={()=>{changeComponentScheme()}}>
            {componentScheme === "light"?
              <> <div style={{marginRight:"5px"}}><LightIcon width={"20"} height={"20"}/></div><p style={{marginTop:"10px", marginBottom:"10px"}}>Light</p> </> :
              <> <div style={{marginRight:"5px"}}><DarkIcon width={"20"} height={"20"}/></div><p style={{marginTop:"10px", marginBottom:"10px"}}>Dark</p></>}
            
          </Button>
        </div>
        <Container fluid>
          <Row className="rowextra">
            <Col className="colextra" style={{ backgroundColor: "unset" }} md={6} xs={12}>
              <LeftBox componentScheme={componentScheme}/>
            </Col>
            <Col className="colextra" style={{ backgroundColor: "unset" }} md={6} xs={12}>
              asd
            </Col>
          </Row>
        </Container>
  </Provider>
  );
}

export default App;
