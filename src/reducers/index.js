import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers';
import SelectionReducers from './SelectionReducers';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducers
});
