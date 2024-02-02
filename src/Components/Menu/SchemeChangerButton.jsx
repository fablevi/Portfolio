import { Button } from "react-bootstrap";

import LightIcon from "../../icons_set/LightIcon.jsx";
import DarkIcon from "../../icons_set/DarkIcon.jsx";

function SchemeChangerButton(props){

    return <>
        <Button variant={props.componentScheme === "light" ? "outline-dark": "outline-light"} onClick={()=>{props.changeComponentScheme()}}>
            {props.componentScheme === "light"?
              <> <div ><LightIcon  width={"20"} height={"20"}/></div></> :
              <> <div ><DarkIcon width={"20"} height={"20"}/></div></>}
            
          </Button>
    </>
}

export default SchemeChangerButton;

//