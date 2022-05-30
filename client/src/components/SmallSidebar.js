import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { useAppContext } from "../context/appContext"
import Logo from "./Logo"
import { NavLinks } from "../components"

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
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}
export default SmallSidebar
