import { action } from "typesafe-actions";
import { PayloadActionTypes, SpaceXPayload } from "./types";

export const spaceXPayloadRequest = () => 
action(PayloadActionTypes.SPACE_X_PAYLOAD_REQUEST);
export const spaceXPayloadSuccess = (res: SpaceXPayload[]) =>
action(PayloadActionTypes.SPACE_X_PAYLOAD_SUCCESS, res);
export const spaceXPayloadError = (message: Error) =>
action(PayloadActionTypes.SPACE_X_PAYLOAD_ERROR, message);

export const payloadPaginationRequest=(params:{limit:number,offset:number})=>
action(PayloadActionTypes.PAYLOAD_PAGINATION_REQUEST,params)
export const payloadPaginationSuccess=(res: SpaceXPayload[])=>
action(PayloadActionTypes.PAYLOAD_PAGINATION_SUCCESS,res)
export const payloadPaginationError=(message:Error)=>
action(PayloadActionTypes.PAYLOAD_PAGINATION_ERROR,message)
