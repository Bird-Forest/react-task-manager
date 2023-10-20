// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { filtersReducer, tasksReducer } from './reducer';
// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer);
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
