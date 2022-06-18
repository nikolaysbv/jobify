import Wrapper from "../assets/wrappers/LandingPage"
import { useAppContext } from "../context/appContext"
import { Link } from "react-router-dom"
import * as Scroll from "react-scroll"
import {
  Logo,
  FunctionsDescriptionContainer,
  RegisterModal,
} from "../components"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import authorImg from "../assets/images/author.jpg"

const Landing = () => {
  const { isRegisterModalActive, toggleRegisterModal } = useAppContext()

  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
        <div className="btn-container">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </nav>
      <div className="page container">
        {isRegisterModalActive && <RegisterModal />}
        <Scroll.Element name="hero">
          <article className="hero">
            <h1>Your Job Organizer</h1>
            <p>
              Jobify helps you effortlessly track the status of your job
              applications, make notes about them, monitor your performance, and
              share your success with your friends.
            </p>
            <h4>So you never forget which job you applied to again.</h4>
            <div className="btn-container">
              <button className="btn" onClick={toggleRegisterModal}>
                Try It{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
              <Scroll.Link
                to="description"
                smooth="easeInOutCubic"
                duration={2000}
              >
                <button className="btn">
                  Read More{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
              </Scroll.Link>
            </div>
          </article>
        </Scroll.Element>
        <Scroll.Element name="description">
          <article className="description">
            <h2>What is Jobify?</h2>
            <p>
              Jobify is a web application which serves as a job organizer for
              users. Some of its functionalities include:
            </p>
            <FunctionsDescriptionContainer></FunctionsDescriptionContainer>
          </article>
        </Scroll.Element>
        <Scroll.Element name="about">
          <article className="about">
            <h2>About the author</h2>
            <div className="about-container">
              <img src={authorImg} alt="" className="about-img" />
              <p className="about-text">
                My name is Nikolay Srebrev. After finishing my Bachelor's degree
                in Management and Business Information Systems and working as a
                BI consultant for a while, I have decided to enter the world of
                web development.<br></br>
                <br></br>This project has been created as a practice and a part
                of my personal portfolio. If you would like to check out some of
                my other projects, please go to my{" "}
                <a href="https://github.com/nikolaysbv" target="__blank">
                  GitHub page
                </a>
                .
              </p>
              <p className="about-note">
                This application was built on top of the Jobify project from
                John Smilga's MERN stack course. If you are interested in
                learning web development, I would highly suggest checking out
                John's courses at{" "}
                <a href="https://www.johnsmilga.com/" target="__blank">
                  johnsmilga.com
                </a>
                .
              </p>
            </div>
          </article>
        </Scroll.Element>
      </div>
      <footer>
        <ul className="footer-links">
          <li>
            <Scroll.Link
              to="hero"
              smooth="easeOutCubic"
              duration={1000}
              offset={-128}
            >
              Home
            </Scroll.Link>
          </li>
          <li>
            <Scroll.Link to="description" smooth="easeOutCubic" duration={1000}>
              Description
            </Scroll.Link>
          </li>
          <li>
            <Scroll.Link to="about" smooth="easeOutCubic" duration={1000}>
              About me
            </Scroll.Link>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <a href="mailto:nikolay.srebrev@gmail.com">
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nikolay-srebrev/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/nikolaysbv" target="_blank">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </footer>
    </Wrapper>
  )
}

export default Landing
