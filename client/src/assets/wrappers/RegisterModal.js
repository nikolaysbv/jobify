import styled from "styled-components"

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: var(--transition);
  opacity: ${({ isRegisterModalActive }) => (isRegisterModalActive ? 1 : 0)};
  z-index: ${({ isRegisterModalActive }) => (isRegisterModalActive ? 10 : -1)};

  .register-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;
    width: 90vw;
    max-width: 800px;
    background: var(--white);
    border-radius: 0.25rem;
    box-shadow: var(--shadow-2);
    margin: 3rem auto;
    transition: var(--transition);

    .register-form {
      padding: 5rem 4rem;
    }

    h3 {
      text-align: center;
    }
    p {
      margin: 0;
      margin-top: 1rem;
      text-align: center;
    }
    .btn {
      margin-top: 2rem;
    }
    .btn:hover {
      color: var(--white);
      background-color: var(--gradient-color-3);
      transition: var(--transition);
      transform: scale(1);
    }
    .member-btn {
      background: transparent;
      border: transparent;
      color: var(--gradient-color-3);
      cursor: pointer;
      letter-spacing: var(--letterSpacing);
    }

    .close-modal-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--black);
      cursor: pointer;
    }

    .logo-container {
      background-color: var(--gradient-color-3);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--borderRadius);
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      .logo {
        background-color: inherit;
      }
    }
  }
`
export default Wrapper
