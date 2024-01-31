import { Image } from "react-bootstrap";

import AvatarIMG from "../../images/avatar.jpg";

function Avatar() {

    return <div >
        <Image className="avatarImage" src={AvatarIMG} roundedCircle />
    </div>

}

export default Avatar;