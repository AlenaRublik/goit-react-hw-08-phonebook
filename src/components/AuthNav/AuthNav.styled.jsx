import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: rgb(85, 26, 139);


  &:hover,
  &:focus,
  &:active {
    color: #f41685;
  }
`;
