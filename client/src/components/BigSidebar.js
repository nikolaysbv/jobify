import Wrapper from "../assets/wrappers/BigSidebar"
import Logo from "./Logo"
import { NavLinks } from "../components"
import { useAppContext } from "../context/appContext"

const BigSidebar = () => {
  const { showSidebar } = useAppContext()

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? "" : "show-sidebar"}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
