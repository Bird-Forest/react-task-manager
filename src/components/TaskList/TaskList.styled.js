import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  gap: 10px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 600px) {
    flex-direction: column;
    width: 600px;
  }
`;

export const WrapTask = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 4px 8px;
  gap: 10px;
  min-width: 320px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    width: 600px;
    padding: 8px 16px;
    gap: 15px;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  background-color: blue;
  border-radius: 2px;
  outline: 3px solid rgb(77, 106, 255);
  width: 28px;
  height: 28px;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);

  &:autofill {
    border: 3px solid darkorange;
  }

  &:-webkit-autofill {
    border: 3px solid darkorange;
  }

  .input[type='checkbox']:checked {
    background-color: green;
  }

  @media screen and (min-width: 600px) {
    width: 36px;
    height: 36px;
  }
`;

export const TextTask = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(77, 106, 255);
  color: white;
  min-width: 280px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid rgb(77, 106, 255);

  padding: 4px 8px;
  margin: 0;
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  &:-webkit-autofill {
    border: 3px solid darkorange;
  }

  ${props => {
    switch (props.$mode) {
      case 'dark':
        return `
          background-color: white;
          color:  rgb(0, 77, 153);
          ${Checkbox}:checked + && {
          background-color:  rgb(77, 106, 255);
              color: white;
          }
        `;
      default:
        return `
          background-color: white;
          color: rgb(0, 77, 153);
          ${Checkbox}:checked + && {
            background-color:  rgb(77, 106, 255);
            color: white;
          }
        `;
    }
  }}

  @media screen and (min-width: 600px) {
    min-width: 450px;
    font-size: 20px;
    padding: 8px 16px;
  }
`;
export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid rgb(77, 106, 255);
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 7px 9px 3px rgba(0, 0, 0, 0.57);
  &:hover,
  :focus {
    background-color: rgb(77, 106, 255);
  }
  @media screen and (min-width: 600px) {
    width: 44px;
    height: 44px;
  }

  .icon-delete {
    width: 28px;
    height: 28px;
    fill: rgb(77, 106, 255);
  }
  .icon-delete:hover,
  .icon-delete:focus {
    fill: white;
  }
`;
