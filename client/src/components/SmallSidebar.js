import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { useAppContext } from "../context/appContext"
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id, icon } = link

              return (
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link"
                  }}
                  key={id}
                  onClick={toggleSidebar}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default SmallSidebar
