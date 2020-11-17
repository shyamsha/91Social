import { action } from "typesafe-actions";
import { HistoryActionTypes, SpaceXHistory } from "./types";

export const spaceXHistoryRequest = (params:{limit:number,offset:number}) => 
action(HistoryActionTypes.SPACE_X_HISTORY_REQUEST,params);
export const spaceXHistorySuccess = (res: SpaceXHistory[]) =>
action(HistoryActionTypes.SPACE_X_HISTORY_SUCCESS, res);
export const spaceXHistoryError = (message: Error) =>
action(HistoryActionTypes.SPACE_X_HISTORY_ERROR, message);

export const historyPaginationRequest=(params:{limit:number,offset:number})=>
action(HistoryActionTypes.HISTORY_PAGINATION_REQUEST,params)
export const historyPaginationSuccess=(res: SpaceXHistory[])=>
action(HistoryActionTypes.HISTORY_PAGINATION_SUCCESS,res)
export const historyPaginationError=(message:Error)=>
action(HistoryActionTypes.HISTORY_PAGINATION_ERROR,message)
