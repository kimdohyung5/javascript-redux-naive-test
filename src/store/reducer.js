import {combineReducers} from 'redux'
import entityReducer from './entityReducer'



export default combineReducers({
    entity: entityReducer
})