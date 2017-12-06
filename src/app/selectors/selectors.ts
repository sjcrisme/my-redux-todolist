import { createSelector } from 'reselect';

const getcheckedTodos = (state) => state.checkedId;
const getAllTodos  = (state) => state.posts;
