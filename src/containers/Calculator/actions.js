import {
  SAVE_MEMORY,
  CLEAR_MEMORY,
  UPDATE_VALUE,
  OPRERATION,
  EQUALS,
  CLEAR,
  RESTORE_MEMORY
} from './constants';

export const saveMemory = (number) => ({
  type: SAVE_MEMORY,
  number
});

export const restoreMemory = (number) => ({
  type: RESTORE_MEMORY,
  number
});

export const clearMemory = () => ({
  type: CLEAR_MEMORY
});

export const updateValue = (number, valueType) => ({
  type: UPDATE_VALUE,
  number,
  valueType
});

export const operation = (operation) => ({
  type: OPRERATION,
  operation
});

export const equals = () => ({
  type: EQUALS
});

export const clear = () => ({
  type: CLEAR
});
