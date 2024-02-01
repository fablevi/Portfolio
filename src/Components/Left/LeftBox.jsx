import { defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";

import Avatar from "./Avatar";
import HowAmI from "./HowAmI";


//768
function LeftBox(props) {

    return <>
        <Container fluid>
            <Row>
                <Col>
                    <Row style={{ marginTop: "2%" }}>
                        {props.width <= 640 ?
                            <>
                                <Col>
                                    <div className="avatarImageDiv">
                                        <div className="avatarImageBG">
                                            <Avatar />
                                        </div>
                                    </div>
                                    <HowAmI />
                                </Col>
                            </>
                            :
                            <>
                                <Col>
                                    <div className="avatarImageBG">
                                        <Avatar />
                                    </div>
                                </Col>
                                <Col>
                                    <HowAmI />
                                </Col>
                            </>
                        }

                    </Row>
                    <Row>
                        asd
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}

export default LeftBox;