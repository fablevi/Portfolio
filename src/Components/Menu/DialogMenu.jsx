import { DialogTrigger, ActionButton, Dialog, Divider, Content, Text, Button } from "@adobe/react-spectrum";

import HamburgerMenu from "../../icons_set/HamburgerMenu";
import SchemeChangerButton from "./SchemeChangerButton";

function DialogMenu(props) {
    return <>
        <DialogTrigger type="popover" mobileType="tray" placement="bottom" shouldFlip={false}>
            <ActionButton>
                <HamburgerMenu width={24} height={24} />
            </ActionButton>
            <Dialog width={"size-0"}>
                <Content>
                        <Text>
                            <SchemeChangerButton componentScheme={props.componentScheme} changeComponentScheme={props.changeComponentScheme}/>
                            <Button>About me </Button>
                            <Button>How to contact? </Button>
                        </Text>
                    </Content>
            </Dialog>
        </DialogTrigger>
    </>
}

export default DialogMenu;