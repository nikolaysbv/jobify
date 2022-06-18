import styled from "styled-components"

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem 1fr;
  grid-row-gap: 30px;
  padding: 0 10vw;
  justify-items: center;
  align-items: center;
  .func-btns {
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-column-gap: 2rem;
    /* align-self: center; */
    margin: 0;
    li {
      display: inline-block;
      cursor: pointer;
      height: fit-content;
      padding: 0.375rem 0.75rem;
      box-shadow: var(--shadow-2);
      transition: var(--transition);
      border: 2px solid var(--grey-500);
      border-radius: 5px;
      text-align: center;
      font-family: var(--headingFont);
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 1px;
    }
    li:hover {
      box-shadow: var(--shadow-3);
      color: var(--gradient-color-6);
      background-color: var(--gradient-color-2);
    }
    li.active {
      color: var(--gradient-color-6);
      background-color: var(--gradient-color-2);
    }
  }
  .func-text {
    text-align: center;
  }
  .func-img {
    box-shadow: var(--shadow-2);
    border: 1px outset var(--grey-100);
    border-radius: 10px;
    width: 360px;
    height: 180px;
  }
`
export default Wrapper
