import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 20px;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 640px;
  }
`;
export const WrapFormTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 300px;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
