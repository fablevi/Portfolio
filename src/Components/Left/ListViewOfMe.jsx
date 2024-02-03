import { Well } from "@adobe/react-spectrum";

function ListViewOfMe(props) {

    return <>
        <div className="listviewofme">
            <a href="#div1" className="contact-link-a">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }} >
                    👨‍🎓 My degries ➡️
                </Well>
            </a>
            <a href="#div2" className="contact-link-a">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }}>
                    🤹 My skills ➡️
                </Well>
            </a>
            <a className="contact-link-a">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }}>
                    🔨 My projects ➡️
                </Well>
            </a>
        </div>
    </>
}

export default ListViewOfMe;