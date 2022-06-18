import { useState } from "react"
import Wrapper from "../assets/wrappers/FunctionsDescriptionContainer"

const FunctionsDescriptionContainer = () => {
  const [functionality, setFunctionality] = useState("Jobs")

  const functionalities = [
    ["Jobs", "JobsDesc"],
    ["Notes", "NotesDesc"],
    ["Stats", "StatsDesc"],
    ["Social", "SocialDesc"],
  ]

  return (
    <Wrapper>
      <ul className="func-btns">
        {functionalities.map((func, i) => {
          const funcName = func[0]
          return (
            <li
              key={i}
              className={funcName === functionality ? "active" : "inactive"}
              onClick={() => setFunctionality(funcName)}
            >
              {funcName}
            </li>
          )
        })}
      </ul>
      <div className="func-text">
        {functionalities.filter((func) => func[0] === functionality)[0][1]}
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur, aliquam eos provident quibusdam libero tempore excepturi dicta, dolor debitis eligendi quo nemo inventore obcaecati voluptatem unde perferendis asperiores dolorem?"
        }
      </div>
      <img src={"/logo192.png"} alt="" className="func-img" />
    </Wrapper>
  )
}
export default FunctionsDescriptionContainer
