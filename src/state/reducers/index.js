import donateTypeReducer from './firstPage/donateType';
import moneyReducer from './firstPage/money';
import shelterReducer from './firstPage/shelter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    donateType: donateTypeReducer,
    money: moneyReducer,
    shelter: shelterReducer,
});

export default allReducers;