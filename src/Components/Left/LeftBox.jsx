import { defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";

import Avatar from "./Avatar";
import HowAmI from "./HowAmI";

function LeftBox(props) {

    return <>
        <Container fluid>
            <Row>
                <Col>
                    <Row>
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