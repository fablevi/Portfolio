import { DialogTrigger, ActionButton, Dialog, Divider, Content, Text, Button } from "@adobe/react-spectrum";

import HamburgerMenu from "../../icons_set/HamburgerMenu";
import SchemeChangerButton from "./SchemeChangerButton";

function DialogMenu(props) {
    return <>
        <DialogTrigger type="popover" mobileType="popover" placement="bottom" shouldFlip={false}>
            <ActionButton>
                <HamburgerMenu width={24} height={24} />
            </ActionButton>
            <Dialog width={"size-0"} >
                <Content  >
                    <Text>
                        <div className="flexChildren">
                            <div className="margin5px dialogButton">
                                <SchemeChangerButton componentScheme={props.componentScheme} changeComponentScheme={props.changeComponentScheme} />
                            </div>
                            <div className="margin5px dialogButton">
                                <Button UNSAFE_className="dialogButton">About me </Button>
                            </div>
                            <div className="margin5px dialogButton">
                                <Button UNSAFE_className="dialogButton">How to contact? </Button>
                            </div>
                        </div>
                    </Text>
                </Content>
            </Dialog>
        </DialogTrigger>
    </>
}

export default DialogMenu;