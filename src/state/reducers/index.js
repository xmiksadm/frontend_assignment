import donateTypeReducer from './firstPage/donateType';
import moneyReducer from './firstPage/money';
import shelterReducer from './firstPage/shelter';
import nameReducer from './secondPage/name';
import surnameReducer from './secondPage/surname';
import emailReducer from './secondPage/email';
import phoneReducer from './secondPage/phone';
import agreeReducer from './secondPage/agree';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    donateType: donateTypeReducer,
    money: moneyReducer,
    shelter: shelterReducer,
    name: nameReducer,
    surname: surnameReducer,
    email: emailReducer,
    phone: phoneReducer,
    agree: agreeReducer,
});

export default allReducers;