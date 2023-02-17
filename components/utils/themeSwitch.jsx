import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    :checked + span {
      background-color: #2196f3;
    }

    :focus + span {
      box-shadow: 0 0 1px #2196f3;
    }

    :checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
      background-image: url("/assets/images/moon.png");
    }
  }

  /* The slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;

    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 6px;
    bottom: 4px;
    /* background-color: white; */
    background-image: url("/assets/images/sun.png");
    background-size: contain;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ThemeSwtich = ({ children }) => {
  return (
    <Switch>
      {children}
      {/* <input type="checkbox" /> */}
      <span />
    </Switch>
  );
};

export default ThemeSwtich;
