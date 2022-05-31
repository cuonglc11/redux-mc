import { combineReducers} from "redux";
import { postReducers } from "./LaptopReducer";
const reducers = combineReducers({
    laptop  : postReducers
})
export default (state , action) => reducers(state , action)