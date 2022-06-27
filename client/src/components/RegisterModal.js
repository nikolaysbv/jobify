import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Logo, FormRow, Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterModal"
import { useAppContext } from "../context/appContext"
import { MdClose } from "react-icons/md"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const RegisterModal = () => {
  const [values, setValues] = useState(initialState)
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
    toggleRegisterModal,
    isRegisterModalActive,
    isMember,
    toggleMember,
  } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      })
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      })
    }
  }

  return (
    <Wrapper
      className="full-page"
      isRegisterModalActive={isRegisterModalActive}
    >
      <div className="register-container">
        <div className="logo-container">
          <Logo></Logo>
        </div>
        <form className="register-form" onSubmit={onSubmit}>
          <h3>{isMember ? "Login" : "Register"}</h3>
          {showAlert && <Alert />}
          {!isMember && (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            ></FormRow>
          )}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          ></FormRow>
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            submit
          </button>
          <p>
            {isMember ? "Not a member yet?" : "Already a member?"}
            <button type="button" onClick={toggleMember} className="member-btn">
              {isMember ? "Register" : "Login"}
            </button>
          </p>
          <button
            type="button"
            className="close-modal-btn"
            onClick={() => toggleRegisterModal({ isMember })}
          >
            <MdClose></MdClose>
          </button>
        </form>
      </div>
    </Wrapper>
  )
}
export default RegisterModal
