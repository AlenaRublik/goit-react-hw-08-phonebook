import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin: 200px auto;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
  color: rgb(85, 26, 139);
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #a726ac;
  -webkit-text-stroke: 0.5px black;

  :hover,
  :focus {
    color: black;
    -webkit-text-stroke: 1px white;
  }
`;
export const Section = styled.section`
  margin: 10% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

