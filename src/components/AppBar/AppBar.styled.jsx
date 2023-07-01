import styled from 'styled-components';

export const Header = styled.header`
  flex-direction:row-reverse;
  background: linear-gradient(-45deg, rgb(85, 26, 139), pink) no-repeat;
  opacity: 0.9;
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  border-bottom: 5px;
  box-shadow: 0px 10px 20px -2px #07c274;

  & a.active {
    padding: 10px;
    color: #f41685;
    border-radius: 30px;
    background: #16fd9d48;
    -webkit-text-stroke: 0.5px black;
  }
`;
