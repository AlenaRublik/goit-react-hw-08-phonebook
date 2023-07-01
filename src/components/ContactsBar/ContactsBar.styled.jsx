import styled from 'styled-components';

export const Wrapper = styled.div`
flex-direction: row-reverse;
  display: flex;
  width: 700px;
  margin: 50px auto;
  gap: 100px;
  justify-content: center;
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: rgb(85, 26, 139);
`;

export const Text = styled.h2`
  font-size: 32px;
  color: rgb(85, 26, 139);
`;

export const Message = styled.p`
  text-align: center;
  width: 500px;
  padding: 10px;
  font-size: 24px;
  color: #310328;
`;
