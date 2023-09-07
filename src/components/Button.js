import { styled } from "styled-components";

const ToyButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default ToyButton;

const Button = styled.button`
  background-color: #8fb0c6;
  border: none;
  border-radius: 4px;
  padding: 10px 100px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #4b89dc;
  }
`;
