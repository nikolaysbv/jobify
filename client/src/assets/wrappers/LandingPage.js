import styled from "styled-components"

const Wrapper = styled.main`
  /* background: var(--gradient-1); */

  span {
    position: relative;
    vertical-align: middle;
  }

  nav {
    background: var(--gradient-2);
    /* width: 100vw; */
    padding: 0 5vw;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        width: 220px;
      }
    }
    .btn-container {
      position: relative;
      top: -0.25rem;
      height: 60%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      .login {
        background: transparent;
        border: none;
        box-shadow: none;
        color: var(--gradient-color-6);
        height: 2rem;
      }
      .signup {
        height: 2rem;
      }
    }
  }

  .page {
    display: grid;
    grid-auto-flow: row;
    /* grid-row-gap: 40vh; */
    .btn {
      font-size: 1.25rem;
      padding: 0.5rem 1.25rem;
    }
  }

  .hero {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20vh;
    h1 {
      color: var(--black);
      text-align: center;
      font-weight: 900;
    }
    p {
      color: var(--black);
      text-align: center;
    }
    h4 {
      color: var(--black);
    }
    .btn-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      row-gap: 10px;
      .btn {
        background: transparent;
        border: none;
        color: var(--black);
        box-shadow: none;
      }
    }
  }

  .description {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10vh;
    padding-top: 10vh;
    h2 {
      color: var(--black);
      text-align: center;
      font-weight: 900;
    }
    p {
      color: var(--black);
      text-align: center;
    }
  }

  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10vh;
    padding-top: 10vh;
    h2 {
      color: var(--black);
      text-align: center;
      font-weight: 900;
    }
    p {
      color: var(--black);
      text-align: center;
    }
    a,
    a:visited {
      color: var(--gradient-color-3);
    }
    .about-container {
      display: grid;
      grid-template-columns: 425px 1fr;
      grid-template-rows: 1fr;
      grid-row-gap: 30px;
      grid-column-gap: 30px;
      padding: 1.5rem 10vw;
      justify-items: center;
      align-items: center;
      .about-text {
        width: 80%;
        text-align: justify;
      }
      .about-note {
        grid-column-start: 1;
        grid-column-end: 3;
        font-weight: 700;
        font-size: large;
      }
      .about-img {
        box-shadow: var(--shadow-2);
        border-radius: 20%;
        width: 425px;
        height: 400px;
      }
    }
  }

  footer {
    display: flex;
    min-height: fit-content;
    background-color: var(--black);
    color: var(--gradient-color-6);
    text-transform: capitalize;
    justify-content: space-between;
    .footer-links {
      display: flex;
      flex-direction: row;
      column-gap: 12px;
      padding: 0 5vw;
      li:hover {
        cursor: pointer;
      }
    }
    .footer-icons {
      display: flex;
      flex-direction: row;
      column-gap: 12px;
      padding: 0 5vw;
      color: var(--gradient-color-6);
      li:hover {
        cursor: pointer;
      }
      a,
      a:visited {
        color: inherit;
      }
    }
  }

  @media (max-width: 1080px) {
    .about {
      .about-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        .about-note {
          grid-column-start: 1;
          grid-column-end: 2;
        }
      }
    }
  }
`
export default Wrapper
