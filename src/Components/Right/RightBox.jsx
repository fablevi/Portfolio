import { useState } from "react";
import SchemeChangerButton from "../Menu/SchemeChangerButton";
import ScrollBox from "./ScrollBox";
import { Col, Row } from "react-bootstrap";
import Contact from "../Left/Contact";
import Schools from "../Info/Schools";
import FOSSProjects from "../Info/FOSSProjects";
import Skills from "../Info/Skills";

function RightBox(props) {

    const [scrollBoxVisibility, setScrollBoxVisibility] = useState(true)

    return <>
        {props.width >= 768 ? <div className="rightSchemeButton">
            <SchemeChangerButton componentScheme={props.componentScheme} changeComponentScheme={props.changeComponentScheme} />
        </div>
            :
            null}
        <div className={props.width >= 768 ? "rightBoxInfoDivBG" : "rightBoxInfoDivBGMobil"}>
            {props.width >= 768 ?
                <ScrollBox visibility={scrollBoxVisibility} setVisibility={setScrollBoxVisibility} colorScheme={props.componentScheme} />
                :
                null}
            <div className={props.width >= 768 ? "rightBoxInfoDivScroll smoothScroll" : "rightBoxInfoDivNoScroll smoothScroll"}>
                <div id="schools">
                    <Schools width={props.width} componentScheme={props.componentScheme}/>
                </div>
                <div id="projects">
                   <FOSSProjects width={props.width} componentScheme={props.componentScheme}/> 
                </div>
                <div id="skills">
                    <Skills width={props.width} componentScheme={props.componentScheme}/>
                </div>
            </div>
        </div>
        {props.width < 768 ?
            <Row>
               {props.width >= 768 ?
                    <Row>
                        <Col>
                            <Contact width={props.width} componentScheme={props.componentScheme}/>
                        </Col>
                    </Row>:null} <Col>
                    <Contact width={props.width} componentScheme={props.componentScheme} />
                </Col>
            </Row> : null}
    </>
}

export default RightBox;