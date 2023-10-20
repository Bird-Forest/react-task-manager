// import { statusFilters } from './constants';
// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from 'redux';
// import { addTask, deleteTask, toggleCompleted } from './actions';
// import { createReducer, createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [];

// const tasksSlice = createSlice({
//   // Ім'я слайсу
//   name: 'tasks',
//   // Початковий стан редюсера слайсу
//   initialState: tasksInitialState,
//   // Об'єкт редюсерів
//   reducers: {
//     addTask(state, action) {
//       state.push(action.payload);
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// Генератори екшенів
// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
// export const tasksReducer = tasksSlice.reducer;

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {},
//   [deleteTask]: (state, action) => {},
//   [toggleCompleted]: (state, action) => {},
// });

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };
// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// Код редюсерів tasksReducer та filtersReducer
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
