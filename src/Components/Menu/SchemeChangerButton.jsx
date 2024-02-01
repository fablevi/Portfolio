import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"

import LightIcon from "../../icons_set/LightIcon.jsx";
import DarkIcon from "../../icons_set/DarkIcon.jsx";

function SchemeChangerButton(props){

    return <>
        <Button UNSAFE_className="dialogButton" onPress={()=>{props.changeComponentScheme()}}>
            {props.componentScheme === "light"?
              <> <div ><LightIcon styling={{marginRight:"5px"}} width={"20"} height={"20"}/>Light</div></> :
              <> <div ><DarkIcon styling={{marginRight:"5px"}} width={"20"} height={"20"}/>Dark</div></>}
            
          </Button>
    </>
}

export default SchemeChangerButton;