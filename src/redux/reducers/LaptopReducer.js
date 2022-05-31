import * as ActionType from '../../type/ActionTypes'
const initalState = {
    isLoaded: false,
    isLoggedIn: false,
    isShowingFab: false,
    isLoading: false,
    fcmToken: '',
    fcmListeners: [],
    handleCheckedFcm: false,
    ipAddress: '',
  };
  
export const postReducers = (state = initalState , payload) => {
    switch (payload.type) {
        case ActionType.GET_LAPTOP:
            return {
              ...state ,
             ... payload.data
            }
    
        default:
            return state
    }
}