import { Reducer } from "redux";
import { PayloadActionTypes, SpaceXPayloadState } from "./types";

const initialState: SpaceXPayloadState = {
  loading: false,
  SpaceXPayload: null,
  errors: {
    SpaceXPayload: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<SpaceXPayloadState, A> = (
  state: SpaceXPayloadState = initialState,
  action: A
) => {
  switch (action.type) {
    case PayloadActionTypes.SPACE_X_PAYLOAD_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, SpaceXPayload: undefined },
      };
    case PayloadActionTypes.SPACE_X_PAYLOAD_SUCCESS:
      return { ...state, loading: false, SpaceXPayload: action.payload };
    case PayloadActionTypes.SPACE_X_PAYLOAD_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, SpaceXPayload: action.payload },
      };
  
    default:
      return state;
  }
};

export { initialState as spaceXPayloadInitialState, reducer as spaceXPayloadReducer };
