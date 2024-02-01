import { Image } from "react-bootstrap";

import AvatarIMG from "../../images/avatar.jpg";

function Avatar() {

    return <div>
        <Image className="avatarImage avatarImageCorner" src={AvatarIMG} />
    </div>

}

export default Avatar;