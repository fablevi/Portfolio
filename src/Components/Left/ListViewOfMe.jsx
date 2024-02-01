import { Well } from "@adobe/react-spectrum";

function ListViewOfMe(props) {

    return <>
        <div className="listviewofme">
            <Well UNSAFE_style={{backgroundColor:"rgba(0, 191, 255, 0.356)"}} >
                <div onClick=  {() => {}}>
                    👨‍🎓 My degries ➡️
                </div>
            </Well>
            <Well  UNSAFE_style={{backgroundColor:"rgba(0, 191, 255, 0.356)"}}>
                <div onClick=  {() => {}}>
                    🤹 My skills ➡️
                </div>
            </Well>
            <Well  UNSAFE_style={{backgroundColor:"rgba(0, 191, 255, 0.356)"}}>
                <div onClick=  {() => {}}>
                    🔨 My projects ➡️
                </div>
            </Well>
        </div>
    </>
}

export default ListViewOfMe;