import React from 'react';
import { BtnForm, FormTask, InputForm, WrapForm } from './TaskForm.styled';
// Імпортуємо генератор екшену
import { addTask } from '../../redux/tasksSlice';
import { useDispatch } from 'react-redux';

export default function TaskForm() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(event.target.elements.text.value));
    console.log(event.target.elements.text.value);
    event.target.reset();
  };
  return (
    <WrapForm>
      <FormTask onSubmit={handleSubmit}>
        <InputForm type="text" name="text" placeholder="Enter task text..." />
        <BtnForm type="submit">Add task</BtnForm>
      </FormTask>
    </WrapForm>
  );
}
