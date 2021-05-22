interface IAppState {
  searchKeyword: string
}

export const SET_GLOBAL_SEARCH_TERM = "SET_GLOBAL_SEARCH_TERM";


export default function appReducer(state: IAppState = {searchKeyword: ''}, action: any) {
    switch (action.type) {
        case SET_GLOBAL_SEARCH_TERM:
            state = {
              searchKeyword: action.payload
            };
            return state;
        default:
            return state
    }
}
