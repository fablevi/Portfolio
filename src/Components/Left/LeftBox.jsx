import { defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";

import Avatar from "./Avatar";
import HowAmI from "./HowAmI";
import ListViewOfMe from "./ListViewOfMe";


//768
function LeftBox(props) {

    return <>
        <Container fluid>
            <Row className={props.width <= 768 ? "" : "rowextra"}>
                <Col className={props.width <= 768 ? "" : "colextra colFlex"}>
                    <Row className="colFlexdiv1" style={{ marginTop: "2%" }}>
                        {props.width <= 950 ?
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
                    {props.width <= 768 ?
                        null :
                        <Row className="colFlexdiv2">
                            <ListViewOfMe />
                        </Row>
                    }

                </Col>
            </Row>
        </Container>
    </>
}

export default LeftBox;