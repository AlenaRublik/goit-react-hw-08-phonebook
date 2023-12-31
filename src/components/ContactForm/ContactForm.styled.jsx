import { Form, Field} from 'formik';
import styled from 'styled-components';


export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  margin-bottom: 50px;
  max-width: 500px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  margin-right: auto;
  justify-content: center;
  color: rgb(85, 26, 139);
  font-size: 1.5rem;
`;

export const InputName = styled(Field)`
  width: 400px;
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

export const InputTel = styled(InputName)``;

export const Button = styled.button`
  background-color: rgb(85, 26, 139);
  color: white;
  display: flex;
  width: 120px;
  min-height: 50px;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  transition: background-color 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    background-color: rgba(84, 26, 139, 0.323);
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #0c0c0c;
  font-size: 17px;
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
`;
