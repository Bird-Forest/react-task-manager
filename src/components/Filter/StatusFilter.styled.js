import styled from 'styled-components';
export const WrapFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  min-width: 320px;
  background-color: rgb(179, 229, 255);
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
export const TitleFilter = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: rgb(0, 77, 153);
  padding: 0;
  margin: 0;
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 240px;
  height: 50px;
`;
export const BtnAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-all {
    width: 36px;
    height: 36px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-all:hover,
  .icon-btn-all:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
`;
export const BtnActive = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-active {
    width: 36px;
    height: 36px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-active:hover,
  .icon-btn-active:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
`;
export const BtnCompleted = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-ended {
    width: 36px;
    height: 36px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-ended:hover,
  .icon-btn-ended:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
`;
