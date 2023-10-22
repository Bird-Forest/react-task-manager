import styled from 'styled-components';

export const WrapCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  min-width: 320px;
  /* margin-left: auto;
  margin-right: auto; */
  background-color: rgb(179, 229, 255);
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
export const TitleCounter = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: rgb(0, 77, 153);
  padding: 0;
  margin: 0;
`;
export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 200px;
  height: 50px;
`;
export const Active = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 32px;
  font-weight: 500;
  padding: 0;
  margin: 0;

  .icon-active {
    width: 36px;
    height: 36px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
`;
export const Completed = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 32px;
  font-weight: 500;
  padding: 0;
  margin: 0;

  .icon-completed {
    width: 36px;
    height: 36px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
`;
