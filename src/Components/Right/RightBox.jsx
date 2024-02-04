import { useState } from "react";
import SchemeChangerButton from "../Menu/SchemeChangerButton";
import ScrollBox from "./ScrollBox";
import { Col, Row } from "react-bootstrap";
import Contact from "../Left/Contact";
import Schools from "../Info/Schools";

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
                    div2
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilirightBoxInfoDivsi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    asd
                </div>
                <div id="skills">
                    div2
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilirightBoxInfoDivsi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                    asd
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