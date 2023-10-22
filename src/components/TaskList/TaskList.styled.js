import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 0;
  gap: 10px;
  margin: 0 auto;
`;

export const WrapTask = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aquamarine;
  gap: 15px;
  width: 600px;
  padding: 10px;
`;
export const InputTask = styled.input`
  width: 30px;
  height: 30px;
`;
export const TextTask = styled.p`
  min-width: 400px;
  font-size: 20px;
`;
export const BtnDelete = styled.button`
  width: 60px;
  height: 30px;
`;
