import styled from '@emotion/styled';

export const LiItem = styled.li`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: rgba(85, 26, 139, 0.8);
  border: 1px solid hotpink;
`;
export const SpanIcon = styled.span`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SpanName = styled.span`
  color: #f9459f;
  -webkit-text-stroke: 1px #f9459f;
  font-weight: 500;
  font-size: 24px;
`;

export const SpanNumber = styled.span`
  color: #f2eeff;
  font-weight: 500;
  font-size: 24px;
`;

export const ButtonDlt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  color: #07c274;
  border-radius: 50%;
  border-color: transparent;
  outline: none;
  transition: transform 250ms ease-in;
  :hover,
  :focus {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    width: 24px;
    height: 24px;
    transition: transform 250ms linear;
  }
`;