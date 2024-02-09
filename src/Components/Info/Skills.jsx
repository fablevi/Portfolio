import JavaIcon from "../../icons_set/Java";
import JavaScriptIcon from "../../icons_set/JavaScript";
import ReactIcon from "../../icons_set/ReactIcon";
import SpringIcon from "../../icons_set/Spring";

import SkillsJSON from "../json/Skills.json";


function Skills(props) {

  const icons = [
    <ReactIcon width="80%" height="80%" componentScheme={props.componentScheme} />,
    <JavaScriptIcon width="80%" height="80%" componentScheme={props.componentScheme} />,
    <JavaIcon width="80%" height="80%" componentScheme={props.componentScheme} />,
    <SpringIcon width="80%" height="80%" componentScheme={props.componentScheme} />
  ]

  return <>
    <h1 style={{ textAlign: "center" }}>SKILLS</h1>
    <div className="myCard">
      <div className="skillsIconDiv">
        {icons.map((icon, index) => {
          return <div key={index} style={{ marginTop: index % 2 === 0 ? "10%" : "-10%" }}>
            {icon}
          </div>
        })}
      </div>
    </div>
    <div className="myCard">
      {SkillsJSON.small_text_array.map((data, index) => {
        return <div key={index} className={index === 0 ? "" : "skillsTextDiv"}>
          {data.map((string,index)=>{
            return <>{string}</>
          })}
        </div>
      })}
    </div>
  </>
}

export default Skills;