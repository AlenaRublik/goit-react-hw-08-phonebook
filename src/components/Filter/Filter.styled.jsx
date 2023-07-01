import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-direction: column;
  color: rgb(85, 26, 139);
  -webkit-text-stroke: 0.5px rgb(85, 26, 139);
  font-size: 16px;
`;

export const Input = styled.input`
  display: block;
  min-width: 500px;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;
