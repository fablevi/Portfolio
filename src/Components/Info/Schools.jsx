import { Col, Row, Container, Image } from "react-bootstrap";

import SchoolJSON from "../json/Schools.json";

import gdeIMG from "../imgs/gde.jpg"
import katker from "../imgs/katker.jpg"
import MapIcon from "../../icons_set/MapIcon";
import Diploma from "../../icons_set/DiplomaSVG";

function Schools(props) {

    const images = [
        katker,
        katker,
        gdeIMG,
    ]

    return <>
        {SchoolJSON.map((data, index) => {
            return <div key={index}>
                <div className="myCard">
                    <Container fluid>
                        <Row>
                            <Col>
                                <h5>{data.name}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="schoolIMGDiv" xs={12} xxl={7}>
                                <Image src={images[index]} rounded style={{ marginBottom: "2%" }} />
                                <div className="schoolIMGFlexBox">
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.city}</div></Col>
                                        </Row>
                                    </div>
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.learned}</div></Col>
                                        </Row>
                                    </div>
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.paper}</div></Col>
                                        </Row>
                                    </div>
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.when}</div></Col>
                                        </Row>
                                    </div>
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.website}</div></Col>
                                        </Row>
                                    </div>
                                    <div className="schoolIMGFlexBoxDivs">
                                        <Row>
                                            <Col><MapIcon /></Col>
                                            <Col style={{ paddingLeft: 0 }}><div>{data.google_maps}</div></Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col className="schoolShortListDiv" xs={12} xxl={5}>
                                {data.short_list}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        })}
    </>
}

export default Schools;