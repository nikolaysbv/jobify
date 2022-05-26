import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            assumenda beatae? Soluta dolorem, porro maxime cum, mollitia, labore
            animi quaerat beatae incidunt consequatur aut quas omnis id unde
            iusto fuga!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
