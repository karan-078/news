import {SET_LOADING ,
 SET_STORIES ,
 REMOVE_STORES,
 HANDLE_PAGE, 
 HANDL_SEARCH} from './action'

const reducer = (state, action)=>{
    if(action.type===SET_LOADING){
        return {...state, isLoading:true}
    }

    else{
        throw new Error (`no matching "${action.type}" action type`)
    }
}
 export default reducer;   
