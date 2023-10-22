import React from 'react';
import {
  BtnDelete,
  InputTask,
  TextTask,
  WrapList,
  WrapTask,
} from './TaskList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

export default function TaskList() {
  const dispatch = useDispatch();
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks.tasks);
  console.log(tasks);
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters);
  console.log(filter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const showStatusTasks = (tasks, filter) => {
    if (filter.statusFilters === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (filter.statusFilters === 'ended') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };
  const changeTasks = showStatusTasks(tasks, filter);
  const showArr = Array.isArray(tasks) && tasks.length;
  return (
    <WrapList>
      {showArr &&
        changeTasks.map(({ id, text, completed }) => (
          <WrapTask key={nanoid()} id={nanoid()}>
            <InputTask
              type="checkbox"
              onChange={() => dispatch(toggleCompleted(id))}
              checked={completed}
            />
            <TextTask>{text}</TextTask>
            <BtnDelete onClick={() => dispatch(deleteTask(id))}>
              Delete
            </BtnDelete>
          </WrapTask>
        ))}
    </WrapList>
  );
}
