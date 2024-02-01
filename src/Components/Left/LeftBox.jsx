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
                        <Col>
                            <Avatar />
                        </Col>
                        <Col>
                            <HowAmI/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}

export default LeftBox;