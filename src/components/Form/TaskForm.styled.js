import styled from 'styled-components';

export const FormTask = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
  gap: 10px;
  padding: 10px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    width: 600px;
  }
`;
export const InputForm = styled.input`
  display: inline-block;
  background-color: rgb(102, 204, 255);
  color: white;
  min-width: 320px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid rgb(102, 204, 255);
  outline: 2px solid rgb(102, 204, 255);
  padding: 4px 8px;
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    width: 500px;
    font-size: 20px;
    padding: 8px 16px;
  }
`;
export const BtnForm = styled.button`
  display: block;
  border-radius: 10px;
  background-color: rgb(102, 204, 255);
  border: 2px solid rgb(102, 204, 255);
  outline: 2px solid rgb(102, 204, 255);
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);

  @media screen and (min-width: 600px) {
    width: 48px;
    height: 48px;
  }
  &:hover,
  :focus {
    background-color: rgb(77, 106, 255);
    outline: 2px solid rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
  }
  .icon-add {
    width: 28px;
    height: 28px;
    fill: rgb(77, 106, 255);
  }
  .icon-add:hover,
  .icon-add:focus {
    fill: white;
  }
`;
