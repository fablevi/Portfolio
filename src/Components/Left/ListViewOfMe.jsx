import { Well } from "@adobe/react-spectrum";

function ListViewOfMe(props) {

    return <>
        <div className="listviewofme">
            <a href="#schools" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }} >
                    👨‍🎓  Schools and studies ➡️
                </Well>
            </a>
            <a href="#projects" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }}>
                    🔨 Open source projects ➡️
                </Well>
            </a>
            <a href="#skills" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }}>
                    🤹 Learned skills ➡️
                </Well>
            </a>
        </div>
    </>
}

export default ListViewOfMe;