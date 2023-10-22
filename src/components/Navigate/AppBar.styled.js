import styled from 'styled-components';

export const TopNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 320px;
  /* height: 100px; */
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
