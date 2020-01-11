import { combineReducers } from 'redux';
import formReducer from '../reducers/form';

const rootReducer = combineReducers({
  formReducer,
});

export default rootReducer;