import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORES,
  HANDLE_PAGE,
  HANDL_SEARCH,
} from "./action";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  } 
  if (action.type === SET_STORIES) {
    return { ...state, isLoading: false, hits:action.payload.hits, nbPages:action.payload.nbPages };
  } 
  
  if(action.type=== REMOVE_STORES){
    return {
        ...state, hits:state.hits.filter((story)=> story.objectID !== action.payload),
    }
  }

  if(action.type=== HANDL_SEARCH){
    return {
        ...state,query:action.payload, page:0
    }
  }
 
  if(action.type === HANDLE_PAGE){
  if (action.payload === 'inc') {
    let nextPage = state.page + 1
    if (nextPage > state.nbPages - 1) {
      nextPage = 0
    }
    return { ...state, page: nextPage }
  }
  if (action.payload === 'dec') {
    let prevPage = state.page - 1
    if (prevPage < 0) {
      prevPage = state.nbPages - 1
    }
    return { ...state, page: prevPage }
  }
}
  else {
    throw new Error(`no matching "${action.type}" action type`);
  }


};
export default reducer;
