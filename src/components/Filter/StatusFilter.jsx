import React from 'react';
import {
  WrapFilter,
  BtnAll,
  BtnActive,
  BtnCompleted,
  WrapBtn,
  TitleFilter,
} from './StatusFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо генератор екшену
import { setStatusFilter } from '../../redux/filtersSlice';

export default function StatusFilter() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters);
  console.log(filter);
  // Викликаємо генератор екшену onClick та передаємо значення фільтра

  return (
    <div>
      <WrapFilter>
        <TitleFilter>Filter by status</TitleFilter>
        <WrapBtn>
          <BtnAll
            selected={filter.all}
            onClick={() => dispatch(setStatusFilter(filter.all))}
          >
            All
          </BtnAll>
          <BtnActive
            selected={filter.active}
            onClick={() => dispatch(setStatusFilter(filter.active))}
          >
            Active
          </BtnActive>
          <BtnCompleted
            selected={filter.ended}
            onClick={() => dispatch(setStatusFilter(filter.ended))}
          >
            Ended
          </BtnCompleted>
        </WrapBtn>
      </WrapFilter>
    </div>
  );
}
