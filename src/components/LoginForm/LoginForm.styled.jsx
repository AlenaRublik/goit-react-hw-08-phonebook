import { Field, Form } from 'formik';
import styled from 'styled-components';


export const Title = styled.h2`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 30px;
  color: #2d1249;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormBox = styled(Form)`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 70px;
  background: hotpink;
  box-shadow: -10px -10px 18px #a01270ca;
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
  color: white;
  font-size: 1.5rem;
`;

export const Input = styled(Field)`
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

export const ErrorMessageText = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #2d1249;
  font-size: 17px;
`;

export const SubmitButton = styled.button`
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
