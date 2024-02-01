import { Well } from "@adobe/react-spectrum";

function ListViewOfMe(props) {

    return <>
        <div className="listviewofme">
            <Well  >
                <div onClick=  {() => {}}>
                    👨‍🎓 My degries ➡️
                </div>
            </Well>
            <Well >
                <div onClick=  {() => {}}>
                    🤹 My skills ➡️
                </div>
            </Well>
            <Well >
                <div onClick=  {() => {}}>
                    🔨 My projects ➡️
                </div>
            </Well>
        </div>
    </>
}

export default ListViewOfMe;