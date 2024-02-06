import FOSS from "../json/FOSS.json"

function FOSSProjects(props) {
    return <div style={{display:"flex", flexDirection:"column"}}>
        {FOSS.map((data, index) => {
        return <div className="myFOSSCard" style={{ alignSelf: index % 2 === 1? "flex-end" : "flex-start" }}>
            {index}
        </div>
        })}
    </div>
}

export default FOSSProjects;

//