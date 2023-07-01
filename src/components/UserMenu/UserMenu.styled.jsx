import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SpanIcon = styled.span`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 25px;
  color: rgb(85, 26, 139);
`;

export const Button = styled.button`
  background-color: #6a2ddb75;
  font-size: 20px;
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;

  &:hover,
  &:focus {
    background-color: #16fd9d48;
    color: #ffffff;
  }
`;
