import AppDispatcher from './AppDispatcher';
import { uniqueId } from 'lodash';

export const addItem = value => {
  AppDispatcher.dispatch({
    type: 'ADD_NEW_ITEM',
    item: { value, packed: false, id: uniqueId() }
  });
};

export const toggleItem = item => {
  AppDispatcher.dispatch({
    type: 'TOGGLE_ITEM',
    item: { ...item, packed: !item.packed }
  });
};

export const removeItem = item => {
  AppDispatcher.dispatch({
    type: 'REMOVE_ITEM',
    item
  });
};
