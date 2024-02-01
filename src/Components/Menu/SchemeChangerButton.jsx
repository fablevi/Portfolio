import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"

import LightIcon from "../../icons_set/LightIcon.jsx";
import DarkIcon from "../../icons_set/DarkIcon.jsx";

function SchemeChangerButton(props){

    return <>
        <Button onPress={()=>{props.changeComponentScheme()}}>
            {props.componentScheme === "light"?
              <> <div style={{marginRight:"5px"}}><LightIcon width={"20"} height={"20"}/></div></> :
              <> <div style={{marginRight:"5px"}}><DarkIcon width={"20"} height={"20"}/></div></>}
            
          </Button>
    </>
}

export default SchemeChangerButton;