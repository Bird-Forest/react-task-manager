import React from 'react';
import TaskForm from './Form/TaskForm';
import AppBar from './Navigate/AppBar';
import TaskList from './TaskList/TaskList';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Container>
  );
};
