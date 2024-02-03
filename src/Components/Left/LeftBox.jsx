import { defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";

import HowAmI from "./HowAmI";
import ListViewOfMe from "./ListViewOfMe";
import Contact from "./Contact";


//768
function LeftBox(props) {

    return <>
        <Container fluid>
            <Row className={props.width <= 768 ? "" : "rowextra"}>
                <Col className={props.width <= 768 ? "" : "colextra colFlex"}>
                    <Row className="colFlexdiv1" style={{ marginTop: "2%" }}>
                    {props.width > 768 ?
                        props.width >1600?
                            <div style={{width:"60%"}}>
                                <HowAmI />
                            </div>
                                :
                            <HowAmI />
                        :
                        <div style={{width:"80%"}}>
                            <HowAmI/>
                        </div>
                    }

                    </Row>
                    <Row>
                        <Col>
                            <Contact width={props.width} componentScheme={props.componentScheme}/>
                        </Col>
                    </Row>
                    {props.width <= 768 ?
                        null :
                        <Row className="colFlexdiv2">
                            <ListViewOfMe/>
                        </Row>
                    }

                </Col>
            </Row>
        </Container>
    </>
}

export default LeftBox;

/*
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
*/