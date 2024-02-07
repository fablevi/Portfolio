import { Well } from "@adobe/react-spectrum";

function ListViewOfMe(props) {

    return <>
        <div className="listviewofme">
            <a href="#schools" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_className="listviewofme-well">
                    👨‍🎓  Schools and studies ➡️
                </Well>
            </a>
            <a href="#projects" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_className="listviewofme-well">
                    🔨 Open source projects ➡️
                </Well>
            </a>
            <a href="#skills" className="contact-link-a contact-link-a-hover">
                <Well UNSAFE_className="listviewofme-well">
                    🤹 Learned skills ➡️
                </Well>
            </a>
        </div>
    </>
}

export default ListViewOfMe;

//UNSAFE_style={{ backgroundColor: "rgba(0, 191, 255, 0.356)" }}