import { Reducer } from "redux";
import { HistoryActionTypes, SpaceXHistoryState } from "./types";

const initialState: SpaceXHistoryState = {
  loading: false,
  spaceXHistory: null,
  errors: {
    spaceXHistory: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<SpaceXHistoryState, A> = (
  state: SpaceXHistoryState = initialState,
  action: A
) => {
  switch (action.type) {
    case HistoryActionTypes.SPACE_X_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, spaceXHistory: undefined },
      };
    case HistoryActionTypes.SPACE_X_HISTORY_SUCCESS:
      return { ...state, loading: false, spaceXHistory: action.payload };
    case HistoryActionTypes.SPACE_X_HISTORY_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, spaceXHistory: action.payload },
      };
  
    default:
      return state;
  }
};

export { initialState as spaceXHistoryInitialState, reducer as spaceXHistoryReducer };
