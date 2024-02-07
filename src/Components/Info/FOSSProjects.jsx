import { Col, Row, Container, ListGroup } from "react-bootstrap";
import { TagGroup, Item } from '@adobe/react-spectrum'

import FOSS from "../json/FOSS.json"


function FOSSProjects(props) {
    return <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center" }}>GITHUB</h1>
        {FOSS.map((data, index) => {
            return <div key={index} className="myFOSSCard" style={{ alignSelf: index % 2 === 1 ? "flex-end" : "flex-start" }}>
                <Container fluid>
                    <Row>
                        <Col>
                            <h5 style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ alignSelf: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                                    {index % 2 === 1 ? "" : "Link ➡️"} <a style={{ fontSize: "larger" }} className="contact-link-h5" href={data.githubLink} target="_blank">
                                        {data.name}
                                    </a> {index % 2 === 1 ? "⬅️ Link" : ""}
                                </div>
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ marginBottom: "2%" }} className="schoolShortListDiv">
                                {data.short_list}
                            </div>
                            <TagGroup UNSAFE_className={props.componentScheme === "light" ? "lightItems" : "darkItems"} zIndex={0}>
                                {data.programLanguages.map((dItem, index) => {
                                    return <Item className={props.componentScheme === "light" ? "special-listgroup-item special-listgroup-item-light" : "special-listgroup-item special-listgroup-item-dark"}  style={{fontSize:"larger"}} key={index}>{dItem}</Item>
                                })}
                            </TagGroup>

                        </Col>
                    </Row>
                </Container>
            </div>
        })}
    </div>
}

export default FOSSProjects;

//className="special-listgroup-item" 
/*
<ListGroup horizontal>
                                {data.programLanguages.map((item, index)=>{
                                    return <ListGroup.Item className={props.componentScheme === "light" ? "special-listgroup-item special-listgroup-item-light" : "special-listgroup-item special-listgroup-item-dark"} key={index} style={{fontSize:"larger"}}>{item}</ListGroup.Item>
                                })}
                            </ListGroup>
*/