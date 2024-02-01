import { useState, useLayoutEffect } from "react";
import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";
import "./App.css"

import LeftBox from "./Components/Left/LeftBox.jsx";
import SchemeChangerButton from "./Components/Menu/SchemeChangerButton.jsx";

function App() {
  if (!localStorage.getItem("componentScheme")) {
    localStorage.setItem("componentScheme", "light");
  }

  const [componentScheme, setComponentScheme] = useState(localStorage.getItem("componentScheme"));

  function changeComponentScheme() {
    if (componentScheme === "light") {
      setComponentScheme("dark")
      localStorage.setItem("componentScheme", "dark");
    } else {
      setComponentScheme("light")
      localStorage.setItem("componentScheme", "light");
    }
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();
  //<span>Window size: {width} x {height}</span>

  return (
    <Provider theme={defaultTheme} id="prov" colorScheme={componentScheme}>
      <Container fluid>
        <Row className="rowextra">
          <Col className="colextra" style={{ backgroundColor: "unset" }} md={6} xs={12}>
          {width < 768? "true":null}
            <LeftBox componentScheme={componentScheme} />
          </Col>
          <Col className="colextra" style={{ backgroundColor: "unset" }} md={6} xs={12}>
            CONTACT ME!!!
            {width >= 768? "true":null}
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;

/*
<SchemeChangerButton componentScheme={componentScheme} changeComponentScheme={changeComponentScheme}/>

 <Button onPress={()=>{changeComponentScheme()}}>
            {componentScheme === "light"?
              <> <div style={{marginRight:"5px"}}><LightIcon width={"20"} height={"20"}/></div></> :
              <> <div style={{marginRight:"5px"}}><DarkIcon width={"20"} height={"20"}/></div></>}
            
          </Button>
          <div style={{ position: "absolute", padding: "1%", width: "100%", minHeight: "80px" }}>

      </div>
*/
